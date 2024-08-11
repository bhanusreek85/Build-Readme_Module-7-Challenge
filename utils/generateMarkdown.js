// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return " ";
  }
  if (license && license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let toc = '## Table of Contents\n';

  if (data.description) {
    toc += '- [Description](#description)\n';
  }
  if (data.installation) {
    toc += '- [Installation](#installation)\n';
  }
  if (data.usage) {
    toc += '- [Usage](#usage)\n';
  }
  if (data.license != 'None') {
    toc += '- [License](#license)\n';
  }
  if (data.contributing) {
    toc += '- [Contributing](#contributing)\n';
  }
  if (data.tests) {
    toc += '- [Tests](#tests)\n';
  }
  if (data.github && data.email) {
    toc += '- [Questions](#questions)\n';
  }

  return toc;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  }
  if (license != 'None') {
    return `
## License

This project is licensed under the ${license} license. For more information, please visit the [license page](${renderLicenseBadge(license)}).
`}
  else {
    return " ";

  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data)}

## Description
${data.description}

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.dependency}
\`\`\`

${data.usage ? `
## Usage
${data.usage}` : ''}

${data.contribution ? `
## Contribution
${data.contribution}` : ''}

${data.tests ? `
## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\``: ''}

${renderLicenseSection(data.license)}

${data.github && data.email ? `
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

`: ' '}
`;
}

export default generateMarkdown;
