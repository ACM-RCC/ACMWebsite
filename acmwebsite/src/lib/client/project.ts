// lib/client/project.ts 

import { ACMProject } from "@/lib/types/project";

export const fetchProjects = async (): Promise<ACMProject[]> => {
  const res = await fetch("/api/project");

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
