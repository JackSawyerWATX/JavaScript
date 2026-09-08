# Sleep Example

A minimal JavaScript example that implements an asynchronous `sleep` function with `Promise` and `setTimeout`.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Security](#security)
- [How to Contribute?](#how-to-contribute)
- [What's Next?](#whats-next)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About

`sleep(millis)` returns a promise that resolves after the requested delay. The included example waits one second and logs a completion message.

## Features

- Waits asynchronously without blocking JavaScript execution.
- Accepts a delay in milliseconds.
- Logs when the sample delay completes.

## Tech Stack

- JavaScript
- Node.js

## Architecture

The script has two parts: `sleep` creates and returns a promise that is resolved by `setTimeout`, and the sample call logs after that promise resolves.

## Project Structure

```text
sleep/
|- README.md
`- run.js
```

## Getting Started

Install Node.js, then run:

```powershell
node run.js
```

After one second, the script prints:

```text
Sleep completed
```

## Configuration

No configuration or environment variables are required. Change the value passed to `sleep` in `run.js` to use a different delay.

## Security

The project does not process credentials, user input, or network requests. Do not add secrets directly to source files.

## How to Contribute?

1. Create a branch for the change.
2. Keep changes focused and test the script with `node run.js`.
3. Open a pull request describing the change.

## What's Next?

- Add input validation for delay values.
- Export `sleep` for reuse by other scripts.
- Add automated tests.

## License

No license has been specified for this project.

## Acknowledgements

Built with Node.js and the JavaScript `Promise` and `setTimeout` APIs.

## Author

JackSawyerWATX
