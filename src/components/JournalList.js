import React, {useState} from 'react'
import JournalForm from './JournalForm'
import Journal from './Journal'

function JournalList() {
    const [journals, setJournals] = useState([])

    const addJournal = journal => {
        if(!journal.text || /^\s*$/.test(journal.text)){
            return
        }
        const newJournals = [journal, ...journals]
        setJournals(newJournals)
    }

    const removeJournal = id => {
        const removeArr = [...journals].filter(journal => journal.id !== id)
        setJournals(removeArr)
    }

    const updateJournal = (journalId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setJournals(prev => prev.map(item => (item.id === journalId ? newValue : item)))
    }

    const completeJournal = id => {
        let updatedJournals = journals.map(journal => {
            if(journal.id === id){
                journal.isComplete = !journal.isComplete
            }
            return journal
        })
        setJournals(updatedJournals)
    }

    return (
        <div >
          <JournalForm onSubmit={addJournal}/>
          <h1>VIEW YOUR PAST JOURNAL ENTRIES BELOW:</h1>
          <Journal
          journals={journals}
          completeJournals={completeJournal}
          removeJournal={removeJournal}
          updateJournal={updateJournal}
          /> 
        </div>
    )
}

export default JournalList
