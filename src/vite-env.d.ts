/**
 * Component: vite-env.d
 * Purpose: TypeScript definitions for Vite environment
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

/// <reference types="vite/client" />

declare module "*.json" {
  const value: unknown;
  export default value;
}
