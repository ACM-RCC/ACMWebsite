"use client";

import { gsap } from "@/lib/animations/gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Soft round sprite for the nodes (so points are glowing dots, not squares). */
function makeNodeTexture() {
	const size = 64;
	const canvas = document.createElement("canvas");
	canvas.width = canvas.height = size;
	const ctx = canvas.getContext("2d");
	if (!ctx) return null;
	const g = ctx.createRadialGradient(
		size / 2,
		size / 2,
		0,
		size / 2,
		size / 2,
		size / 2
	);
	g.addColorStop(0, "rgba(255,255,255,1)");
	g.addColorStop(0.35, "rgba(255,255,255,0.6)");
	g.addColorStop(1, "rgba(255,255,255,0)");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, size, size);
	return new THREE.CanvasTexture(canvas);
}

/**
 * Cursor-reactive "network graph" hero background: nodes connected by edges,
 * slowly drifting, tilting toward the pointer. Decorative only (aria-hidden) and
 * mounted only after capability gating (see Hero), so any failure stays invisible
 * behind the static poster. Renders on the shared gsap.ticker (single RAF loop).
 */
export function HeroCanvas() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const cores =
			typeof navigator !== "undefined" ? navigator.hardwareConcurrency || 4 : 4;
		const NODES = cores >= 8 ? 90 : 50;
		const LINK_DIST = 2.3;
		const SPREAD = 6;

		const width = container.clientWidth;
		const height = container.clientHeight;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
		camera.position.z = 9;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(width, height);
		container.appendChild(renderer.domElement);

		const group = new THREE.Group();
		scene.add(group);

		// Node positions
		const pos = new Float32Array(NODES * 3);
		for (let i = 0; i < NODES; i++) {
			pos[i * 3] = (Math.random() - 0.5) * SPREAD * 1.7;
			pos[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
			pos[i * 3 + 2] = (Math.random() - 0.5) * SPREAD;
		}
		const pointsGeo = new THREE.BufferGeometry();
		pointsGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
		const sprite = makeNodeTexture();
		const pointsMat = new THREE.PointsMaterial({
			size: 0.17,
			map: sprite ?? undefined,
			transparent: true,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
			color: 0xffffff,
			opacity: 0.9,
		});
		const points = new THREE.Points(pointsGeo, pointsMat);
		group.add(points);

		// Edges between nearby nodes
		const edges: number[] = [];
		for (let i = 0; i < NODES; i++) {
			const ix = pos[i * 3] ?? 0;
			const iy = pos[i * 3 + 1] ?? 0;
			const iz = pos[i * 3 + 2] ?? 0;
			for (let j = i + 1; j < NODES; j++) {
				const jx = pos[j * 3] ?? 0;
				const jy = pos[j * 3 + 1] ?? 0;
				const jz = pos[j * 3 + 2] ?? 0;
				const dx = ix - jx;
				const dy = iy - jy;
				const dz = iz - jz;
				if (Math.sqrt(dx * dx + dy * dy + dz * dz) < LINK_DIST) {
					edges.push(ix, iy, iz, jx, jy, jz);
				}
			}
		}
		const lineGeo = new THREE.BufferGeometry();
		lineGeo.setAttribute(
			"position",
			new THREE.BufferAttribute(new Float32Array(edges), 3)
		);
		const lineMat = new THREE.LineBasicMaterial({
			color: 0xff6a2b,
			transparent: true,
			opacity: 0.16,
		});
		const lines = new THREE.LineSegments(lineGeo, lineMat);
		group.add(lines);

		// Pointer parallax target
		const target = { x: 0, y: 0 };
		const onMove = (e: PointerEvent) => {
			target.x = (e.clientX / window.innerWidth - 0.5) * 2;
			target.y = (e.clientY / window.innerHeight - 0.5) * 2;
		};
		window.addEventListener("pointermove", onMove);

		// Only render while on screen
		let visible = true;
		const io = new IntersectionObserver(
			(entries) => {
				visible = !!entries[0]?.isIntersecting;
			},
			{ threshold: 0 }
		);
		io.observe(container);

		const render = () => {
			if (!visible || document.hidden) return;
			group.rotation.y += 0.0008;
			group.rotation.x += (target.y * 0.3 - group.rotation.x) * 0.05;
			camera.position.x += (target.x * 1.2 - camera.position.x) * 0.05;
			camera.position.y += (-target.y * 1.0 - camera.position.y) * 0.05;
			camera.lookAt(0, 0, 0);
			renderer.render(scene, camera);
		};
		gsap.ticker.add(render);

		const onResize = () => {
			const w = container.clientWidth;
			const h = container.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};
		window.addEventListener("resize", onResize);

		return () => {
			gsap.ticker.remove(render);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("resize", onResize);
			io.disconnect();
			pointsGeo.dispose();
			pointsMat.dispose();
			sprite?.dispose();
			lineGeo.dispose();
			lineMat.dispose();
			renderer.dispose();
			renderer.forceContextLoss();
			if (renderer.domElement.parentNode) {
				renderer.domElement.parentNode.removeChild(renderer.domElement);
			}
		};
	}, []);

	return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
