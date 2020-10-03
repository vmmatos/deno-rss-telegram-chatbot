![Test](https://github.com/olaven/markblog/workflows/Test/badge.svg) [![codebeat badge](https://codebeat.co/badges/b9a1453a-7b64-4392-bde6-947ce7d96c79)](https://codebeat.co/projects/github-com-olaven-markblog-master)
# Deno RSS TELEGRAM BOT

## About
This is a small Deno project that will parse a RSS "Noticias ao Minuto" PT news feed, and send the content to a telegram chatbot.

## Installation 
* Install [deno](https://deno.land)
* `deno install --allow-read --allow-write --name markblog https://denopkg.com/olaven/markblog`
* Grab the location path at end of logging 
* Update your path: `export PATH="<THE_LOCATION>:$PATH"`

## Getting started
* Edit config.js with your Telegram Token
* Run `deno run --allow-read --allow-net index.js`

## Contributions
All kinds of contributions are welcome. 
Feature requests, bug reports, code, artwork, documentation, or just feedback in general.

## License
MIT