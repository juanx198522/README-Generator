// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `
  [${license}](https://choosealicense.com/licenses/${license.toLowerCase()})
    `;
  } else {
    return ' ';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
  This project is licensed under the ${license} license. ${renderLicenseLink(license)}
  `;
  } else {
    return ' ';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

## Description
${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.invoke}

## Credits

${data.collaborators}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

---`;
}

module.exports = generateMarkdown;