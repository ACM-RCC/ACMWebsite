// lib/firebase-admin.ts
import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert('acmwebsite-rcc-firebase-adminsdk-fbsvc-daed94830a.json'), 
    projectId: 'acmwebsite-rcc'
  })
}

export const db = admin.firestore()
