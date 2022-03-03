# Blockchain Medical records

## Idea
The idea is to store your(patient's) medical data onto blockchain so that it will be secured. Also, there will be permissions for doctors and other user roles to access your medical data/reports.

## Project Setup

```
Blockchain Medical records
│   .gitignore
│   hardhat.config.js
│   package-lock.json
│   package.json
│   README.md
├───contracts                 # Contains solidity contracts
│       Greeter.sol
│
├───front-end                 # Contains FrontEnd code which is in ReactJS
│   │   .gitignore
│   │   index.html
│   │   package-lock.json
│   │   package.json
│   │   vite.config.js
│   │
│   └───src
│           App.css
│           App.jsx
│           favicon.svg
│           index.css
│           logo.svg
│           main.jsx
│
├───scripts                   # Scripts to interact with solidity contracts
│       sample-script.js
│
└───test
        sample-test.js
```

## Libraries used

### BlockChain

- [hardhat ethers](https://hardhat.org/)
- [OpenZeppelin Contracts](https://openzeppelin.com/contracts/)

### Front-end
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Ethers](https://ethers.org/)

## Developing and testing

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
