[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)
![license](https://badgen.net/badge/license/MIT/blue)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

![hugo](https://img.shields.io/badge/hugo-v0.104.3-green?style=plastic&logo=hugo&link=https://github.com/gohugoio/hugo)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

![github](https://badgen.net/badge/icon/github?icon=github&label)
![release](https://badgen.net/github/release/judaicalink/judaicalink-site?color=green)
![releases](https://badgen.net/github/releases/judaicalink/judaicalink-site)
![stars](https://badgen.net/github/stars/judaicalink/judaicalink-site)![forks](https://badgen.net/github/forks/judaicalink/judaicalink-site)
![issues](https://badgen.net/github/issues/judaicalink/judaicalink-site)
![commits](https://badgen.net/github/commits/judaicalink/judaicalink-site)
![last-commit](https://badgen.net/github/last-commit/judaicalink/judaicalink-site)
![branches](https://badgen.net/github/branches/judaicalink/judaicalink-site)
![contributors](https://badgen.net/github/contributors/judaicalink/judaicalink-site)

![wiki](https://badgen.net/badge/icon/wiki?icon=wiki&label)
[![Documentation Status](https://readthedocs.org/projects/judaicalink-labs/badge/?version=latest)](http://judaicalink-labs.readthedocs.io/?badge=latest)

![discord](https://badgen.net/badge/icon/discord?icon=discord&label)
![Discord](https://img.shields.io/discord/696646598868074576)

![Twitter Follow](https://img.shields.io/twitter/follow/judaicalink?style=social)

# JudaicaLink Website

## What is JudaicaLink?

## Installation
Clone the project: `git clone https://github.com/judaicalink/judaicalink-site.git`.
Go into the directory: `cd judaicalink-site`.

Install hugo (see below).

## Hugo
The website is generated using Hugo.
Hugo is a static site generator, using Markdown sites and template to compile static websites.

### Windows
Simply download the Hugo executable (Currently used version on the server: [0.104.3](https://github.com/gohugoio/hugo/releases/tag/v0.104.3)).

You have to add hugo in your environment variables under path:

For example: C:\Users\YourName\Desktop\IT\Installations\hugo_0.31.1_Windows-64bit

In your command prompt go to the main directory of the repository (where this README.md file is) and execute "hugo server". 

For example: C:\Users\YourName\Desktop\IT\Githubprojects\judaicalink-site>hugo server

Afterwards, you can browse the website locally under http://localhost:1313

## Linux

Ubuntu: `sudo apt update && sudo apt install hugo`.

Arch: `sudo pacman -S hugo`.

Fedora, RedHat: `sudo pacman -S hugo`

Verify the installation with: `hugo --version`.


## OsX

Install hugo with [brew](https://brew.sh/) `brew install hugo`.

Verify the installation with: `hugo --version`.

# Running

Serve Hugo directly on your local machine with `hugo serve`. It opens up a webserver. Check the terminal for the link and path.

Also check for errors.

# Compiling

If you want to compile the source and generate a live site, just run `hugo`.

This generates the `static` files and the `public` folder.

If you want to compile the sites to a specific folder just use: `hugo -d <your-destination>`.

Now you can serve the pages with a webserver like Apache2 or NGINX.

Either copy the `public` and `static` folders to the serving directory or add the directories in `sites-available` to the location directive.

Don't forge to serve the `static` folder, too.

# Updating the site

Just fetch and pull the latest version of the site, `git fetch` and `git pull`.
The compile the site again.

# Troubleshoot

Check if the Markdown syntax is correct.
Watch the console for errors if your changes do not show up as expected.
Serve the site locally and check for changes.
Clear the cache of your browser.

# Finally

When you are done, commit your changes to your forked repository and send the pull request.

