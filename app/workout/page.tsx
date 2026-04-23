export default function WorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center pt-16 px-4">
      <div className="bg-gray-900 rounded-xl p-8 w-full max-w-md">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Today</p>
        <h1 className="text-white text-2xl font-medium mb-6">Log workout</h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Exercise name</label>
            <input type="text" placeholder="e.g. Bench Press" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm">Sets</label>
              <input type="number" placeholder="3" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm">Reps</label>
              <input type="number" placeholder="10" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm">Weight (lbs)</label>
              <input type="number" placeholder="135" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2">
            Save workout
          </button>
        </div>
      </div>
    </div>
  )
}