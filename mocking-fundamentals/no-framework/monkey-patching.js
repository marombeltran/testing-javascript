const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Marom Beltran', 'Liam Caleb');
assert.strictEqual(winner, 'Marom Beltran');