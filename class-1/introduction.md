TypeScript Compiler

TypeScript is not executed directly by the browser or Node.js.
It is first transpiled (converted) into JavaScript using a compiler.

⚙️ TypeScript Setup
1. Install TypeScript

TypeScript has an official compiler which can be installed using npm.

npm install typescript --save-dev
📌 Explanation:
Installs TypeScript as a development dependency
Creates:
package.json
package-lock.json
Compiler is stored inside node_modules

👉 You can run the compiler using:

npx tsc
🧠 What is npx tsc?

👉 npx tsc runs the TypeScript compiler locally from node_modules.

✔ No global installation required
✔ Uses project-specific TypeScript version

📦 Check TypeScript Version
tsc -v
📌 Explanation:
Shows installed TypeScript version
⚙️ Initialize TypeScript Project

To create TypeScript configuration file:

npx tsc --init
📌 This creates:
tsconfig.json

👉 This file controls how TypeScript compiles your project.

📁 Create TypeScript File

Create a file with .ts extension:

first.ts