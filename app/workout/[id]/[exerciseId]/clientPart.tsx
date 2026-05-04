'use client'

import { useState } from 'react'
import Charts from './charts'


export default function ClientPart({ id, setData, logData }: { id: string; setData: any[] | null; logData: any[] | null }) {
    const [selectedSet, setSelectedSet] = useState(0)

    const max = selectedSet !== 0 && logData!.filter(log => log.set_number === selectedSet).length > 0
        ? logData!.filter(log => log.set_number === selectedSet).reduce((max, log) => log.weight > max.weight ? log : max)
        : null

    const currentSet = setData!.find((s: any) => s.set_number === selectedSet)

    return(
        <div className="h-screen bg-gray-950 flex flex-col px-4 gap-4 pt-2">
            
            <div className="flex gap-2">
                {setData!.map((set: any) => (
                    <button key={set.id} onClick={() => setSelectedSet(set.set_number)} className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedSet === set.set_number ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
                        Set {set.set_number}
                    </button>
                ))}
            </div>

            {selectedSet !== 0 && (
                <>
                    <div className="flex flex-row h-[10%] gap-4">
                        <div className="bg-gray-900 rounded-xl flex-1 overflow-y-auto h-full p-4">
                            <h2 className="text-white text-xl font-medium mb-2">Current Set</h2>
                            {currentSet && (
                                <p className="text-white text-l">Set: {currentSet.set_number} reps: {currentSet.reps} weight: {currentSet.weight}</p>
                            )}
                        </div>
                        <div className="bg-gray-900 rounded-xl flex-1 overflow-hidden h-full p-4">
                            <h1 className="text-white text-3xl text-center">Personal Best</h1>
                            {max && <p className="text-white text-center">{max.weight}lb x {max.reps} reps</p>}
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-xl overflow-hidden h-[90%] pl-5">
                        <div className="flex">
                            <div className='flex-1'><Charts data={logData} length={30} set={selectedSet} yAxis='reps'/></div>
                            <div className='flex-1'><Charts data={logData} length={30} set={selectedSet} yAxis='weight'/></div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}