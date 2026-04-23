export default function WorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Log Workout</h1>

      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex flex-col gap-2">
          <label>Exercise Name</label>
          <input type="text" placeholder="e.g. Bench Press" className="bg-gray-800 p-3 rounded text-white"/>
        </div>

        <div className="flex flex-col gap-2">
          <label>Sets</label>
          <input type="number" placeholder="3" className="bg-gray-800 p-3 rounded text-white"/>
        </div>

        <div className="flex flex-col gap-2">
          <label>Reps</label>
          <input type="number" placeholder="10" className="bg-gray-800 p-3 rounded text-white"/>
        </div>

        <div className="flex flex-col gap-2">
          <label>Weight (lbs)</label>
          <input type="number" placeholder="135" className="bg-gray-800 p-3 rounded text-white"/>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-bold">
          Save Workout
        </button>
      </div>
    </div>
  )
}