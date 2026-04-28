'use client'



export default function ClientPart({ data }: { data: any[] | null }) {
    const workouts = data!.map((item:any) => item.exercises)
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-medium">My Workouts</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
            + Add Workout
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {workouts.length === 0 ? (
            <p className="text-gray-500 text-center mt-12">No workouts yet. Add your first one!</p>
          ) : (
          workouts.map((workout: any) => (
            <div key={workout.id} className="bg-gray-900 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition">
              <div>
                <h2 className="text-white font-medium">{workout.excercises}</h2>
                <p className="text-gray-500 text-sm mt-1">{workout.exercise} exercises</p>
              </div>
              <span className="text-gray-600 text-xl">→</span>
            </div>
          )))}
        </div>

      </div>
    </div>
  )
}