var minenet = require('./minenet');

minenet.rcon('localhost', 25575, '123');

minenet.disprcon('localhost', 25575, '123', 'help');

minenet.getstatus('localhost', 25565);

minenet.getpestatus('localhost', 19132);

minenet.getquery('localhost', 25565);

minenet.jointest('localhost', 25565, 'test@test.com', '123');

minenet.jointestpirat('localhost', 25565, 'Bot_Test');