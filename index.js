const snoowrap = require('snoowrap');
const config = require('./config');

const r = new snoowrap(config);

r.getSubreddit('soccer').getTop().then(console.log);