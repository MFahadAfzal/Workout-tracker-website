export default function WorkoutPage() {
  return (
    <div>
      <h1>Log Workout</h1>

      <div>
        <label>Exercise Name</label>
        <input type="text" placeholder="e.g. Bench Press" />
      </div>

      <div>
        <label>Sets</label>
        <input type="number" placeholder="3" />
      </div>

      <div>
        <label>Reps</label>
        <input type="number" placeholder="10" />
      </div>

      <div>
        <label>Weight (lbs)</label>
        <input type="number" placeholder="135" />
      </div>

      <button>Save Workout</button>
    </div>
  )
}