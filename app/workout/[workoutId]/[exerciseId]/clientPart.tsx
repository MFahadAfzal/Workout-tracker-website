'use client'

import { useState } from 'react'


export default function ClientPart({ id, setData, logData }: { id: string; setData: any[] | null; logData: any[] | null }) {
    const [sets, setSets] = useState(setData ?? [])
    const [logs, setLogs] = useState(logData ?? [])
    console.log(sets)
    return(
        <div className="h-screen bg-gray-950 flex flex-col px-4 gap-4 pt-2">
            <div className="flex flex-row h-[30%] gap-4">
                <div className="bg-gray-900 rounded-xl flex-1 overflow-y-auto h-full">
                    {sets!.length === 0 ? (
                        <p className="text-white">You have no sets for this exercise</p>
                    ) : (sets.map((set: any) => (
                    <p key={set.id} className="text-white text-lg p-4">Set: {set.set_number} reps: {set.reps} weight: {set.weight}</p>
                
                    ))
                        
                    )
                }
                    <button>X</button>
                </div>
                <div className="bg-gray-900 rounded-xl flex-1 overflow-hidden h-full">
                    <button>P</button>
                </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl overflow-hidden h-[70%]">
                <div >
                    
                </div>
            </div>
            
        </div>
    )
}