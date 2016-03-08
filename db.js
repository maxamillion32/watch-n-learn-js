var config = require('./knexfile.js');
var knex = require('knex')(config[process.env.ENV]);

module.exports = knex;

knex.migrate.latest([config]);