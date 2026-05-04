export default function AddExercisePopup({ onAdd, onClose, onChange }: { onAdd: () => void; onClose: () => void; onChange: (name: string) => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
                <h1 className="text-white text-2xl font-medium mb-1">Add Workout</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Workout</label>
                        <input onChange={(e) => onChange(e.target.value)} type="text" placeholder="Your Workout" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <button onClick={onAdd} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">Add</button>
                        <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}