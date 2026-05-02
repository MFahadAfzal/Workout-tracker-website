'use client'
import { useState } from 'react'
import { addSet, getExerciseInfo, addExercise} from "@/utils/db/db.client"

export default function ClientPart({ id, data }: { id: string; data: any[] | null }) {
    const [exercises, setExercises] = useState(data ?? [])
    const [sets, setSets] = useState<any[]>([])
    const [openId, setOpenId] = useState<string | null>(null)
    const [selectedExerciseId, setSelectedExerciseId] = useState("")
    const [userReps, setUserReps] = useState(0)
    const [userWeight, setUserWeight] = useState(0)
    const [showAddExercisePopup, setAddExercisePopup] = useState(false)
    const [exerciseName, setExerciseName] = useState("")


    const addingExercise = async() => {
        console.log(id)
        const newExercise = await addExercise(exerciseName, id)
                  if (newExercise) {
                    setExercises([...exercises, newExercise])  // add new item to existing state
                    setAddExercisePopup(false)
                }
    }

    const getSets = async(exerciseId: string) => {
        console.log("saodjkfohjfojasodfj")
        const userSets = await getExerciseInfo(exerciseId)
        if (userSets) {
            setSets(userSets)
            
        }
        
    }

    const saveNewSet = async(workoutId: string, repitions: number, weight: number) => {
        const newSet = await addSet(workoutId, repitions, weight)
        setSets([...sets, newSet])
    }
//onChange={(e) => setWorkoutName(e.target.value)}


    return (
        <div className="min-h-screen bg-gray-950 px-6 py-12">
            <div className="max-w-2xl mx-auto">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-white text-2xl font-medium">Exercises</h1>
                    <button onClick={() => setAddExercisePopup(true)} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
                        + Add exercise
                    </button>
                </div>

                {/* This is for the popup if the user presses add workout */} 
                {showAddExercisePopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
                        <h1 className="text-white text-2xl font-medium mb-1">Add Workout</h1>

                        <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-sm">Workout</label>
                            <input onChange={(e) => setExerciseName(e.target.value)} type="text" placeholder="Your Workout" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
                        </div>

                        <div className="flex gap-4 flex justify-between">
                            <button onClick={() => addingExercise()} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">
                                Add
                            </button>
                            <button onClick={() => setAddExercisePopup(false)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">
                                close
                            </button>
                        </div>

                        </div>
                    </div>
                </div>
                )}

                <div className="flex flex-col gap-4">
                {exercises!.length === 0 ? (
                    <p className="text-gray-500 text-center mt-12">No Exercises yet. Add your first one!</p>
                ) : (
                exercises!.map((exercise: any) => (
                    <div key={exercise.id} className="bg-gray-900 rounded-xl overflow-hidden">

                        <div onClick={(e) => {e.stopPropagation(); getSets(exercise.id); setOpenId(openId === exercise.id ? null : exercise.id); setSelectedExerciseId(exercise.id)}} className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition">
                            <button className="text-gray-600 text-xl">X</button>
                            <div>
                                <h2 className="text-white font-medium">{exercise.name}</h2>
                                <p className="text-gray-500 text-sm mt-1">{exercise.name} exercises</p>
                            </div>
                            <span className="text-gray-600 text-xl">
                                {openId === exercise.id ? "↓" : "→"}
                            </span>
                        </div>

                        {openId === exercise.id && (
                            <div className="px-6 pb-6 flex flex-col gap-3 border-t border-gray-800">
                                
                                {sets.length === 0 ?(
                                    <p className="text-gray-500 text-center mt-12">No sets yet. Add your first one! </p>
                                ): (
                                    sets.map((set: any) => (
                                        <p key={set.id} className="text-gray-500 text-sm mt-1">set: {set.set_number} reps: {set.reps} weight: {set.weight}lb </p>
                                    ))
                                )}
                                <div className="flex gap-4 mt-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-gray-400 text-sm">Reps</label>
                                        <input onChange={(e) => setUserReps(Number(e.target.value))} type="number" defaultValue={exercise.reps} className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm w-20 focus:outline-none focus:border-blue-500"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-gray-400 text-sm">Weight (lbs)</label>
                                        <input onChange={(e) => setUserWeight(Number(e.target.value))} type="number" defaultValue={exercise.weight} className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm w-24 focus:outline-none focus:border-blue-500"/>
                                    </div>
                                </div>
                                <button onClick={() => saveNewSet(exercise.id, userReps, userWeight)} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg self-start mt-1">
                                    Save
                                </button>
                            </div>
                        )}

                    </div>
                )))}
                </div>

            </div>
        </div>
    )
}