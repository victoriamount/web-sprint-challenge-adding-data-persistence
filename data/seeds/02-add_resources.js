
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Broom', resource_description: 'For sweeping'},
        {resource_name: 'Mug', resource_description: 'Cute dogs printed on it'},
        {resource_name: 'Vaccuum', resource_description: 'For dust and dog hair'},
        {resource_name: 'Coffee Beans', resource_description: 'Osa whole bean'},
        {resource_name: 'Coffee Maker', resource_description: 'Gaggia Platinum'}
      ]);
    });
};
