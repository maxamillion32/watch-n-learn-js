
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', function(table) {
          table.increments('id').primary();
          table.string('name');
          table.string('username');
          table.string('email');
          table.string('password');
          table.string('avatar');
          table.string('bio');
          table.string('provider');
          table.string('uid')
          
          table.timestamps();
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};
