# Screenshot Organizer

An application to organize World of Warcraft screenshots based on their 
timestamps.

**Note:** This is an experimental project and it's expected to have bugs and
limitations.

## Motivation

World of Warcraft screenshots are saved in the game's folder with a 
timestamp that's not well sorted by OS file managers due to the way the
date is formated: month, day and year. So playing the game for a long time
will likely result in a folder full of screenshots that are sorted first by
month, then by day, and then by year, which doesn't make much sense, as
they should be sorted by year, month, and day.

This application aims to solve this problem by organizing the screenshots
into folders based on their timestamps, so players can easily find the
screenshots they want to share or keep with a better sense of timeline.

## ❤️ Support this project

If you like this addon and want to support its development, you can
[buy the author a coffee](https://github.com/sponsors/adrianocastro189).

Every contribution or subscription is deeply appreciated and also supports
the [Stormwind Library project](https://github.com/adrianocastro189/stormwind-library),
which is the framework used to build this addon.

## How to use it

### Requirements

* [Node.js 20.0.0](https://nodejs.org/) or higher - although it may work 
with older versions, it was developed and tested with v20, so it's not
guaranteed to work with older versions.

### Installation

1. Unzip the application files to a folder of your choice
1. Open a terminal and navigate to the folder where you unzipped the files
1. Run `npm install` to install the dependencies

## What's on the roadmap for the next versions

The best way to know what should be done next is to have feedback from 
users. If you have any suggestions or ideas, please let me know by
[opening an issue](https://github.com/adrianocastro189/screenshot-organizer/issues).

* A **graphical interface** to make it easier to use the application
* **Better error handling**, covering more edge cases
* More **log messages** to help users understand what the application is 
doing
* More **detailed settings** for better customization

## For developers

If you want to contribute to this project, you can fork it and submit a
pull request.

### How to run the unit tests

This project uses [Jest](https://jestjs.io/) for unit testing. To run the
tests, use the following command:

```bash
npm test
```