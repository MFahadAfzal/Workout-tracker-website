export default function DeleteExercisePopup({ onDelete, onClose }: { onDelete: () => void; onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
                <h1 className="text-white text-2xl font-medium mb-1">Delete Exercise</h1>
                <div className="flex flex-col gap-4">
                    <label className="text-gray-400 text-sm">Are you sure you would like to delete this Exercise?</label>
                    <div className="flex gap-4 justify-between">
                        <button onClick={onDelete} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">Delete</button>
                        <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2 px-6 py-3">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}