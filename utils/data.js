const chalk = require("chalk");

const dim = chalk.dim;
const italic = chalk.italic;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const orange = chalk.hex(`#FF5E13`).bold.inverse;

const name = `${chalk.hex("#efc06a")(`Ramon Munoz - FrontEnd Engineer`)}`

const bio = `${italic(
  `
    A seasoned front-end developer and web team leader. 
    Excels at coding, testing, launching, and maintaining 
    secure web platforms that deliver on expectations and
    facilitate growth for their organizations. A savvy communicator
    and experienced project manager who enjoys working directly with
    clients, designers, executives, and team members to push the
    envelope and pursue cutting-edge results.
    
    `
)}`;

const social = `
${githubClr(` GitHub `)} ${dim(`https://github.com/ramonemunoz`)}
${orange(` Site `)} ${dim(`https://ramon-munoz.com/ `)}
`;

const ad = `Check out my Site`;


module.exports = {
    name,
    bio,
    social,
    ad
}