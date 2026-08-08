/**
 * Firebase Admin SDK initialisation — SERVER-SIDE ONLY
 *
 * ⚠️ CRITICAL: This file must NEVER be imported from client components.
 * The Admin SDK is for server-side operations only (API routes, Server Components,
 * middleware, and standalone scripts like the migration script).
 *
 * Credentials are loaded from:
 * 1. GOOGLE_APPLICATION_CREDENTIALS environment variable (path to JSON file), or
 * 2. ./firebase-admin-config.json at the project root (fallback)
 */

// Note: This module must only be used server-side (Server Components, API routes, scripts).
// Do NOT import from any client component — it will throw at runtime.

import {
  initializeApp,
  getApps,
  cert,
  type App,
} from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import * as path from 'path';

// Guard against re-initialisation (useful during hot-reload in development)
let adminApp: App;

if (getApps().length === 0) {
  // Load credentials from environment variable or fallback to local config file
  const credentialsPath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    path.resolve(process.cwd(), 'firebase-admin-config.json');

  try {
    adminApp = initializeApp({
      credential: cert(credentialsPath),
    });
  } catch (error) {
    console.error('Failed to initialize Firebase Admin SDK:', error);
    throw new Error(
      `Firebase Admin SDK initialization failed. Ensure ${credentialsPath} exists and is valid.`
    );
  }
} else {
  adminApp = getApps()[0];
}

const adminAuth: Auth = getAuth(adminApp);
const adminDb: Firestore = getFirestore(adminApp);

export { adminApp, adminAuth, adminDb };
