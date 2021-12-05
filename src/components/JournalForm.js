import React, {useState, useEffect, useRef } from 'react'

function JournalForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })
        setInput('')
    }

    return (
       <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label class="block text-gray-700 text-2xl font-bold mb-2 pb-50">
                Add journal entry here:
            </label>
            </div>
            <div>
            <input
            class="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="During today's sitting I..." 
            value={input} 
            name="text"
            onChange={handleChange}
            ref={inputRef}
            />
            </div>
            <div class="py-8">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add Journal Entry</button>
            </div>
            
       </form>
       </div>
    )
}

export default JournalForm
