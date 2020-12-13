#!/usr/bin/env node

// Imports
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagline: `Get to know Ramon`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#efc06a`,
	bold: true,
	clear: true,
});

console.log(`
Ramon Munoz - FrontEnd Engineer

A seasoned front-end developer and web team leader. 
Excels at coding, testing, launching, and maintaining 
secure web platforms that deliver on expectations and
facilitate growth for their organizations. A savvy communicator
and experienced project manager who enjoys working directly with
clients, designers, executives, and team members to push the
envelope and pursue cutting-edge results.

Github : https://github.com/ramonemunoz
Site : https://ramon-munoz.com/

`);
