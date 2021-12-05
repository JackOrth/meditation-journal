import React, {useState} from 'react'
import JournalForm from './JournalForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Journal({journals, completeJournal, removeJournal, updateJournal}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateJournal(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }

    if (edit.id) {
        return <JournalForm edit={edit} onSubmit={submitUpdate}/>
    }
    return journals.map((journal, index) => (
       <div 
        className ={journal.isComplete ? 'journal-row complete' : 'journal-row'} 
        key={index}>
            <div key={journal.id} onClick={() => completeJournal(journal.id)}>
                {journal.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                onClick={() => removeJournal(journal.id)}
                class="cursor-pointer"
                />
                <TiEdit
                onClick={() => setEdit({id: journal.id, value:journal.text })}
                class="cursor-pointer"
                />
            </div>
       </div> 
    ))
}

export default Journal

