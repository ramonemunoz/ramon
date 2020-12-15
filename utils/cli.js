const meow = require("meow");


const helpTxt = `
Usage
    npx ramon [--option] <command>

Options
    social          Print the social info
    --no-social     Don't print the social info
    ad              Print the ad info
    --no-ad         Don't print the ad info
    -d, --debug     Print debug information
    -v, --version   Print CLI version

Commands
    help          Print CLI help information

Examples
    npx ramon --no-social

`;
const options = {
  flags: {
    social: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    debug: {
      type: "boolean",
      default: false,
      alias: "d"
    },
    version: {
      type: "boolean",
      default: false,
      alias: "v"
    },
  },
};

module.exports = meow(helpTxt, options);