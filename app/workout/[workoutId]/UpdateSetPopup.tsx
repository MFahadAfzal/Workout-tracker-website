import { useState } from 'react'
export default function UpdateSetPopup({ onSave, onClose }: { onSave: (reps: number, weight: number) => void; onClose: () => void }) {
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
                <h1 className="text-white text-2xl font-medium mb-1">Update Set</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Reps</label>
                        <input onChange={(e) => setReps(Number(e.target.value))} type="number" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Weight (lbs)</label>
                        <input onChange={(e) => setWeight(Number(e.target.value))} type="number" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <button onClick={() => onSave(reps, weight)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">Save</button>
                        <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}