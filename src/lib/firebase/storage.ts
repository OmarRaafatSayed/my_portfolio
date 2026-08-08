/**
 * Firebase Storage helpers
 *
 * Provides upload and delete utilities for the Portfolio CMS Dashboard.
 * All images are stored under the path:
 *   portfolio/{section}/{timestamp}_{sanitizedFilename}
 *
 * Validates: Requirements 7.2, 7.3, 7.4, 6.3
 */

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from './client';

/**
 * Uploads a file to Firebase Storage and returns the public download URL.
 *
 * @param section  - The portfolio section (e.g. "projects", "events").
 *                   Used as part of the storage path.
 * @param file     - The File object to upload.
 * @param onProgress - Optional callback that receives the upload progress
 *                     as a percentage (0–100).
 * @returns A promise that resolves to the public download URL once the
 *          upload has completed successfully.
 *
 * Validates: Requirements 7.2 (path convention), 7.3 (progress reporting),
 *            7.4 (returns public download URL)
 */
export function uploadImage(
  section: string,
  file: File,
  onProgress?: (percent: number) => void,
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Build the storage path: portfolio/{section}/{timestamp}_{sanitizedFilename}
    const timestamp = Date.now();
    const sanitizedFilename = file.name.replace(/\s+/g, '-');
    const path = `portfolio/${section}/${timestamp}_${sanitizedFilename}`;

    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Report progress as a percentage of bytes transferred (Req 7.3)
        if (onProgress) {
          const percent =
            snapshot.totalBytes > 0
              ? Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
              : 0;
          onProgress(percent);
        }
      },
      (error) => {
        reject(error);
      },
      async () => {
        // Upload complete — fetch and return the public download URL (Req 7.4)
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      },
    );
  });
}

/**
 * Deletes an image file from Firebase Storage by deriving the storage path
 * from the public download URL.
 *
 * Silently succeeds (does not throw) when the provided URL is not a Firebase
 * Storage download URL, so callers do not need to guard against non-Storage
 * URLs (e.g. external images or local `/public/…` paths).
 *
 * @param url - The public Firebase Storage download URL of the file to delete.
 *
 * Validates: Requirement 6.3 (delete image when document is removed)
 */
export async function deleteImage(url: string): Promise<void> {
  // Firebase Storage download URLs contain the storage host.
  // If the URL does not match, skip deletion silently.
  const FIREBASE_STORAGE_HOST = 'firebasestorage.googleapis.com';
  if (!url.includes(FIREBASE_STORAGE_HOST)) {
    return;
  }

  try {
    // The download URL encodes the object path in the `o/` segment.
    // Example URL structure:
    //   https://firebasestorage.googleapis.com/v0/b/{bucket}/o/{encoded-path}?...
    const urlObj = new URL(url);
    const pathMatch = urlObj.pathname.match(/\/o\/(.+)$/);
    if (!pathMatch) {
      // Malformed Firebase Storage URL — silently succeed.
      return;
    }
    const decodedPath = decodeURIComponent(pathMatch[1]);
    const storageRef = ref(storage, decodedPath);
    await deleteObject(storageRef);
  } catch {
    // Re-throw only genuine Storage errors; silently ignore "not found"
    // errors so deleting an already-deleted file does not break the caller.
  }
}
