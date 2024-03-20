let exerciseLogs = [];

// add a new exercise log
function addExerciseLog(type, name, sets, reps, duration) {
  let exerciseLog = {
    type: type,
    name: name,
    duration: duration
  };
  exerciseLogs.push(exerciseLog);
}