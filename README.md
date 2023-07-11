![Header](/IMG/1.png)
<a href="https://github.com/YTFort/MineNet/stargazers"><img src="https://badgen.net/github/stars/YTFort/MineNet" alt="GitHub stars"/></a>
<a href="https://github.com/YTFort/MineNet"><img src="https://badgen.net/github/watchers/YTFort/MineNet" alt="GitHub watchers"/></a>
<a href="https://github.com/YTFort/MineNet"><img src="https://badgen.net/github/forks/YTFort/MineNet" alt="GitHub forks"/></a>
<a href="https://github.com/YTFort/MineNet/releases"><img src="https://badgen.net/github/assets-dl/YTFort/MineNet/tag/v1" alt="GitHub download"/></a>

# `MineNet`
### Script that allows you to easily use the Minecraft API
#### Follow the life of the project here, as well as communicate with the community : [DISCORD](https://discord.gg/bjgpVAxgyE)

## `creator's contacts :`
- 👾 [Discord](https://discord.gg/bjgpVAxgyE)
- ❤️ [Youtube](https://youtube.com/c/fortcote)
- ✈️ [Telegram](https://t.me/FortcoteTG)

## `translations :`
| <sub>EN</sub> [English](README.md) | <sub>RU</sub> [Русский](README_RU.md) |
|-------------------------|----------------------------|

## `Disclaimer :`
> This script is made for learning purposes and does not force you to use its functions for malicious purposes!
>> ❗ You can use the source code in your programs, there are no copyrights, just please provide a link to me ;)
>>> If you find an error, then create Issues!

## `Supported OS :`

 * ✅ Windows
 * ✅ Linux
 * ✅ Mac

## `Features :`

> ❗Offer your ideas for improvement in discussions and in pull requests

 * Supports Minecraft 1.7.X - 1.20.X
 * Java and Bedrock (PE) version support
 * Find out the server status
 * Query
 * Checking the server for operability through the bot
 * Rcon
### 🕓 Soon :
 * Optimization
 * Adding color to the outputs
 * Own API
 * Other Minecraft API functions
 * Make a library out of a script
 * Wiki

# `Installation :`

 * Download last [Release](https://github.com/YTFort/MineNet/releases)
 * First install [Node.js](https://nodejs.dev)

### Library :
```bash
npm install minecraft-server-util
npm install readline-sync
npm install mineflayer
```

### Then place the **minenet.js** to your project

# `Usage :`

## Rcon :
```bash
var minenet = require('./minenet');
minenet.rcon('HOST', PORT, 'PASSWORD');
// minenet.rcon('localhost', 25575, '123');
```
```bash
[#] Rcon is connected
[>] time set day
[<] Set the time to 1000
[>] exit
[!] Rcon is disconnected
```

#### exit or Exit for disconect
#### [>] - input
#### [<] - output

## Disposable Rcon :
```bash
var minenet = require('./minenet');
minenet.rcon('HOST', PORT, 'PASSWORD', 'COMMAND');
```

## Status :
```bash
var minenet = require('./minenet');
minenet.getstatus('HOST', PORT) // JAVA
```
```bash
var minenet = require('./minenet');
minenet.getpestatus('HOST', PORT) // BEDROCK (PE)
```

## Query :
```bash
var minenet = require('./minenet');
minenet.getquery('HOST', PORT) // JAVA
```

## Join :
```bash
var minenet = require('./minenet');
minenet.jointest('HOST', PORT, 'MAIL', 'PASSWORD') // License - JAVA
```
#### Microsoft account!
```bash
var minenet = require('./minenet');
minenet.jointestpirat('HOST', PORT, 'BOTNAME') // Pirat - JAVA
```
#### Output : [#] Successfully - You can log in to the server


# `Thanks :`

- [minecraft server util](https://github.com/PassTheMayo/minecraft-server-util)
- [mineflayer](https://github.com/PrismarineJS/mineflayer)

# `Support me :`

### **Put a ⭐ and Fork if this script turned out to be useful to you**
### ETH : `0x325026E8f45D2D488e753b21F42dDF9BC15A3343`
### [Donate 1 (RU)](https://www.donationalerts.com/r/fortcotetm) / [Donate 2 (EN)](https://new.donatepay.ru/@924403)
