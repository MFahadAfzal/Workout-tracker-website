'use client'
import { useState } from 'react'
import { addWorkout, deleteWorkout } from "@/utils/db/db.client"
import Link from 'next/link';

export default function ClientPart({ data }: { data: any[] | null }) {
    const [showAddWorkoutPopup, setAddWorkoutPopup] = useState(false)
    const [showDeleteWorkoutPopup, setDeleteWorkoutPopup] = useState(false)
    const [workoutName, setWorkoutName] = useState("")
    const [workouts, setWorkouts] = useState(data ?? [])
    const [selectedWorkoutId, setSelectedWorkoutId] = useState("")



    const addingWorkout = async() => {
          const newWorkout = await addWorkout(workoutName)
          if (newWorkout) {
            setWorkouts([...workouts, newWorkout])  // add new item to existing state
            setAddWorkoutPopup(false)
        }
    }

    const deletingWorkout = async(workoutId: string) => {
      const error  = await deleteWorkout(workoutId);
      if (!error) {
        setWorkouts(workouts!.filter(w => w.id !== workoutId));
        setSelectedWorkoutId("")
        setDeleteWorkoutPopup(false)
      }
    }


  return (
    <div className="min-h-screen bg-gray-950 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-medium">My Workouts</h1>
          <button onClick={() => setAddWorkoutPopup(true)} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
            + Add Workout
          </button>
        </div>

{/* This is for the popup if the user presses add workout */} 
        {showAddWorkoutPopup && (
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
                <h1 className="text-white text-2xl font-medium mb-1">Add Workout</h1>

                <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Workout</label>
                    <input onChange={(e) => setWorkoutName(e.target.value)} type="text" placeholder="Your Workout" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
                </div>

                <div className="flex gap-4 flex justify-between">
                    <button onClick={() => addingWorkout()} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">
                        Add
                    </button>
                    <button onClick={() => setAddWorkoutPopup(false)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">
                        close
                    </button>
                </div>

                </div>
            </div>
        </div>
        )}

{/* This is for the popup if the user presses the x beside the workout */} 
        {showDeleteWorkoutPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
                  <h1 className="text-white text-2xl font-medium mb-1">Delete Workout</h1>

                  <div className="flex flex-col gap-4">
                  
                    <label className="text-gray-400 text-sm">Are you sure you would like to delete this Workout?</label>
                  

                  <div className="flex gap-4 flex justify-between">
                      <button onClick={() => deletingWorkout(selectedWorkoutId)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">
                          Delete
                      </button>
                      <button onClick={() => (setSelectedWorkoutId(""),setDeleteWorkoutPopup(false))} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">
                          Close
                      </button>
                  </div>

                  </div>
              </div>
          </div>
        )}

{/* for the workout cards that stack vertically as more are added*/} 
        <div className="flex flex-col gap-4">
            {/* checks if no data and if there is data will make cards */} 
          {workouts!.length === 0 ? (
            <p className="text-gray-500 text-center mt-12">No workouts yet. Add your first one!</p>
          ) : (
          workouts!.map((workout: any) => (
            
            <div key={workout.id} className="bg-gray-900 rounded-xl p-6 flex cursor-pointer hover:bg-gray-800 transition">
              <button onClick={(e) => (e.stopPropagation(), setSelectedWorkoutId(workout.id), setDeleteWorkoutPopup(true))} className="text-gray-600 text-xl w-[10%]">X</button>

              <Link key={workout.id} href={`/workout/${workout.id}`} className='w-[90%] flex justify-between '>
              <div>
                <h2 className="text-white font-medium">{workout.exercise}</h2>
                <p className="text-gray-500 text-sm mt-1">{workout.exercise} exercises</p>
              </div>
              <span className="text-gray-600 text-xl">→</span>
              </Link>
            </div>
            
          )))}
        </div>

      </div>
    </div>
  )
}