#!/usr/bin/env node

// Imports

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const alert = require("cli-alerts");

const data = require("./utils/data");
const cli = require("./utils/cli");
const debug = require("./utils/debug");

const input = cli.input;
const flags = cli.flags;

(async () => {
  welcome({
    title: pkgJSON.name,
    tagline: `Get to know Ramon`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#efc06a`,
    bold: true,
    clear: true,
  });

  input.includes('help') && cli.showHelp(0);

  console.log(data.name);

  console.log(data.bio);

  if (flags.social) {
    console.log(data.social);
  }

  if (flags.ad) {
    alert({ type: "info", msg: data.ad });
  }

  // Debug info if needed  
  debug(flags.debug, cli)
})();
