#!/usr/bin/env node
import { Command } from "commander";
import { logProgramHelp } from "../utils";

// Commands
import strapiCmd from "./strapi";
import wpCmd from "./wp";
import docsCmd from "./docs";

const program = new Command();

program.version("1.0.0").description("SAMI Website Scripts");

/** add sub-commands from child folders */
program.addCommand(strapiCmd);
program.addCommand(wpCmd);
program.addCommand(docsCmd);

if (!process.argv.slice(2).length) {
  logProgramHelp(program);
}

const handleExit = () => {
  console.log("Exiting without error.");
  process.exit();
};
const handleError = (e) => {
  console.error("ERROR! An error was encountered while executing");
  console.error(e);
  console.log("Exiting with error.");
  process.exit(1);
};
process.on("SIGINT", handleExit);
process.on("uncaughtException", handleError);

program.parse(process.argv);
