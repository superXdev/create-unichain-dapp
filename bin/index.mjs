#!/usr/bin/env node

import { execSync } from "child_process";

// Use dynamic imports to handle ESM and CommonJS compatibility
const importModule = async (module) => {
   try {
      return await import(module);
   } catch (error) {
      console.error(`Error importing module ${module}:`, error);
      process.exit(1);
   }
};

(async () => {
   console.log("Soon!");
})();
