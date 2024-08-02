const workspace = `# pnpm-workspace.yaml
packages:
    - "apps/*"
    - "packages/*"
`
const dirStructure = `# Directory structure
project-example/
├─ apps/
├─ packages/
├─ package.json
└─ pnpm-workspace.yaml
`
const command1 = `#Commands
mkdir -p packages/math-lib
cd packages/math-lib
pnpm init
cd ../..
mkdir -p apps/calculator
cd apps/calculator
pnpm init
cd ../..
`

const command2 = `#List all workspaces in JSON format.
pnpm m ls --depth -1 --json`
const command3 = `# Format
pnpm --filter <workspace> <command>
pnpm -F <workspace> <command>
# Example
pnpm --filter math-lib add lodash
pnpm --filter math-lib add -D typescript @types/lodash
pnpm --filter calculator run test
# Support glob pattern
pnpm --filter pkg* run test
`

const command4 = `# Example
pnpm --filter calculator add math-lib --workspace
`

const command5 = `mkdir -p monorepo-example
cd monorepo-example
pnpm init
mkdir -p packages/math-lib
cd packages/math-lib
pnpm init
cd ../..
mkdir -p apps/calculator
cd apps/calculator
pnpm init
cd ../..
touch packages/math-lib/index.js
touch apps/calculator/index.js
`

const command6 = `//packages/math-lib/index.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};
`

const command7 = `//apps/calculator/index.js
const { add, subtract } = require("math-lib");
 
console.log('9 + 10 = ', add(9, 10));
console.log('26 - 9 = ', subtract(26, 9));
`
const command8 = `pnpm --filter calculator add math-lib --workspace`

const command9 = `#apps/calculator/package.json
{
  "scripts": {
    "start": "node index.js"
  }
}
`

const command10 = `#package.json
{
  "scripts": {
    "calculator:start": "pnpm -F calculator run start"
  }
}
`

const command11 = `pnpm run calculator:start`

export {
  workspace,
  dirStructure,
  command1,
  command2,
  command3,
  command4,
  command5,
  command6,
  command7,
  command8,
  command9,
  command10,
  command11
}