const util = require('minecraft-server-util');
const readline = require('readline-sync');
const mineflayer = require('mineflayer');

const client = new util.RCON();

const Status = {
    timeout: 1000 * 10,
    enableSRV: true
};

const Login = {
    timeout: 1000 * 10
};

const Connect = {
    timeout: 1000 * 10
};

module.exports = {
    rcon: function (Host, Port, Password) {
        (async () => {
            await client.connect(Host, Port, Connect);
            await client.login(Password, Login);
            console.log('[#] Rcon is connected');

            do {
                const cmd = readline.question("[>] ");

                if (cmd === 'exit' || cmd === 'Exit') {
                    await client.close();
                    console.log('[!] Rcon is disconnected'); break
                } else {
                    const msg = await client.execute(cmd);
                    console.log('[<] ' + msg);
                };

            } while (true);
        })();
    },

    disprcon: function (Host, Port, Password, Command) {
        (async () => {
            await client.connect(Host, Port, Connect);
            await client.login(Password, Login);

            const msg = await client.execute(Command); console.log('[<] ' + msg);
            await client.close();
        })();
    },

    getstatus: function (Host, Port) {
        util.status(Host, Port, Status)
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    },

    getpestatus: function (Host, Port) {
        util.statusBedrock(Host, Port, Status)
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    },

    getquery: function (Host, Port) {
        util.queryFull(Host, Port, Status)
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    },

    jointestpirat:  function (Host, Port, Name) {
        try {
            const bot = mineflayer.createBot({
                host: Host,
                port: Port,
                username: Name,
                version: false
            });
            bot.once('spawn', () => { console.log('[#] Successfully'); bot.end(); });
            bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn));
            bot.on('error', err => console.log(err));
        } catch {
            console.log('[!] Failed');
        };
    },

    jointest:  function (Host, Port, Mail, Password) {
        const bot = mineflayer.createBot({
            host: Host,
            port: Port,
            username: Mail,
            password: Password,
            auth: 'microsoft',
            version: false
        });
        bot.once('spawn', () => { console.log('[#] Successfully'); bot.end(); });
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn));
        bot.on('error', err => console.log(err));
    },
};