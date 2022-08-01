import path from "path";

const rootDir = path.resolve(__dirname, "../../");
const backendDir = path.resolve(rootDir, "backend");
const sharedDir = path.resolve(rootDir, "shared");
const scriptsDir = path.resolve(rootDir, "scripts");

const wpInputDir = path.resolve(scriptsDir, "input");
const wpOutputDir = path.resolve(scriptsDir, "output");

export const PATHS = {
  backendDir,
  sharedDir,
  wpInputDir,
  wpOutputDir,
};
