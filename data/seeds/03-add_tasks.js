
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Stage coffee setup', task_notes: 'Place mug on coffee maker mug stand', task_completed: true, project_id: 1},
        {task_description: 'Add beans', task_notes: 'Pour beans into the coffee machine', task_completed: false, project_id: 1},
        {task_description: 'Make coffee', task_notes: 'Press LONG COFFEE button', task_completed: false, project_id: 1},
        {task_description: 'Sweep corners', task_notes: 'Pick up large debris ', task_completed: false, project_id: 2},
        {task_description: 'Vaccuum the rugs', task_notes: 'Use rollerbrush feature', task_completed: false, project_id: 2},
        {task_description: 'Sweep spilled beans', task_notes: 'If any beans fell out, clean them up', task_completed: false, project_id: 1},        
      ]);
    });
};
