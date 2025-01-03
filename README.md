# Cypress Test Project - Email Template Automation

This repository contains Cypress tests for automating the email template testing. This document will guide you through the steps to clone, install dependencies, and run the tests.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/) (installed via npm)

## Steps to Run the Project

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/ifaisal7khan/emailTemplateAutomation
cd emailTemplateAutomation

npm install

npx cypress open

# In the Cypress Test Runner, you will see an option labeled E2E Testing. Click on this option.
# After selecting E2E Testing, you will see a list of test cases available for execution.
# Look for the test case named emailTemplate and click on it to run the test.