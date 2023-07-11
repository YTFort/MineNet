![Header](/IMG/1.png)
<a href="https://github.com/YTFort/MineNet/stargazers"><img src="https://badgen.net/github/stars/YTFort/MineNet" alt="GitHub stars"/></a>
<a href="https://github.com/YTFort/MineNet"><img src="https://badgen.net/github/watchers/YTFort/MineNet" alt="GitHub watchers"/></a>
<a href="https://github.com/YTFort/MineNet"><img src="https://badgen.net/github/forks/YTFort/MineNet" alt="GitHub forks"/></a>
<a href="https://github.com/YTFort/MineNet/releases"><img src="https://badgen.net/github/assets-dl/YTFort/MineNet" alt="GitHub download"/></a>

# `MineNet`
### Скрипт, который позволяет вам легко использовать Minecraft API
#### Следите за жизнью проекта здесь, а также общайтесь с сообществом : [DISCORD](https://discord.gg/bjgpVAxgyE)

## `Контакты создателя :`
- 👾 [Discord](https://discord.gg/bjgpVAxgyE)
- ❤️ [Youtube](https://youtube.com/c/fortcote)
- ✈️ [Telegram](https://t.me/FortcoteTG)

## `Переводы :`
| <sub>EN</sub> [English](README.md) | <sub>RU</sub> [Русский](README_RU.md) |
|-------------------------|----------------------------|

## `Дисклеймер :`
> Этот скрипт создан в ознакомительных целях и не принуждает вас использовать его функции в злонамеренных целях!
>> ❗ Вы можете использовать исходный код в своих программах, авторских прав нет, просто, пожалуйста, предоставьте ссылку на меня ;)
>>> Если вы обнаружите ошибку, то создайте Issues!

## `Поддерживаемая ОС :`

 * ✅ Windows
 * ✅ Linux
 * ✅ Mac

## `Функции :`

> ❗Предлагайте свои идеи по улучшению в дискуссиях и в pull requests

 * Поддержка Minecraft 1.7.X - 1.20.X
 * Поддержка версий Java и Bedrock (PE)
 * Узнайте статус сервера
 * Query
 * Проверка работоспособности сервера с помощью бота
 * Rcon
### 🕓 Скоро :
 * Оптимизация
 * Добавление цвета к выходным данным
 * Свой API
 * Другие функции Minecraft API
 * Создать библиотеку из скрипта
 * Wiki

# `Установка :`

 * Скачайте последний [Релиз](https://github.com/YTFort/MineNet/releases)
 * Установите последнюю сервсию [Node.js](https://nodejs.dev)

### Библиотеки :
```bash
npm install minecraft-server-util
npm install readline-sync
npm install mineflayer
```

### Затем поместите **minenet.js** в ваш проект

# `Использование :`

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

#### exit или Exit для отключения
#### [>] - Входные данные
#### [<] - Выходные данные

## Одноразовый Rcon :
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
#### Microsoft аккаунт!
```bash
var minenet = require('./minenet');
minenet.jointestpirat('HOST', PORT, 'BOTNAME') // Pirat - JAVA
```
#### Вывод : [#] Successfully - Значит на сервер можно зайти


# `Спасибо :`

- [minecraft server util](https://github.com/PassTheMayo/minecraft-server-util)
- [mineflayer](https://github.com/PrismarineJS/mineflayer)

# `Поддержите меня :`

### **Поставьте ⭐ и Fork , если этот скрипт оказался вам полезен**
### ETH : `0x325026E8f45D2D488e753b21F42dDF9BC15A3343`
### [Donate 1 (RU)](https://www.donationalerts.com/r/fortcotetm) / [Donate 2 (EN)](https://new.donatepay.ru/@924403)

