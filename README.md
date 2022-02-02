# Hexlet Level 2 Project
[![Actions Status](https://github.com/DemX86/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/DemX86/frontend-project-lvl2/actions)
[![install-lint-test](https://github.com/DemX86/frontend-project-lvl2/actions/workflows/install-lint-test.yml/badge.svg)](https://github.com/DemX86/frontend-project-lvl2/actions/workflows/install-lint-test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/c919d699b119bd9f1f0d/maintainability)](https://codeclimate.com/github/DemX86/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c919d699b119bd9f1f0d/test_coverage)](https://codeclimate.com/github/DemX86/frontend-project-lvl2/test_coverage)

## About
This utility generates a difference of two files with various output formats

Supported files:
* JSON (`.json` file extension)
* YAML (`.yml` and `.yaml`)

Output formats:
* `stylish` (default) — handy diff tree with `+` and `-` changes notation
* `plain` — human-readable report: what happened with items
* `json` — JSON-compatible output of the internal difference tree

## Installation
Clone the repo and run:
```
make install
```

## Usage
Don't hesitate to use `gendiff -h` to check out documentation:
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (choices: "json", "plain", "stylish", default: "stylish")
  -h, --help           display help for command
```

## Demo
[![asciicast](https://asciinema.org/a/g8vfUfddIi4l7ZAKmYm6NC1oK.svg)](https://asciinema.org/a/g8vfUfddIi4l7ZAKmYm6NC1oK)
