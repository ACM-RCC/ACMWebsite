// lib/firebase.ts
import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// init Firebase app once
const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// browser only analytics
let analytics: ReturnType<typeof getAnalytics> | undefined = undefined
if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(firebase_app)
        }
    })
}

export { analytics }
export default firebase_app
export const db = getFirestore(firebase_app);
