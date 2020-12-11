
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Morning Coffee', project_description: 'Make and consume coffee', project_completed: false},
        {project_name: 'Clean Floors', project_description: 'There is dust on the floor that should not be there', project_completed: false}
      ]);
    });
};
