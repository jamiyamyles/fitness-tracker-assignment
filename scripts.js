let exerciseLogs = [];

// add a new exercise log
function addExerciseLog(type, name, sets, reps, duration) {
  let exerciseLog = {
    type: type,
    name: name,
    sets: sets,
    reps: reps,
    duration: duration
  };
  exerciseLogs.push(exerciseLog);
}