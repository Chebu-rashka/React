import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { BsFillArrowRightSquareFill} from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi2";
import { IoSave } from "react-icons/io5";
export default function ToDoList() {
  // create a state that saves the todo items
  const [toDoItems, setToDoItems] = useState([])
  // create a state that saves the value of the input field
  const [inputValue, setInputValue] = useState('')
  // create a state that saves if it's a new todo or edit
  // hint: to know which item is being edited, save the item index
  const [editItemIdx, setEditItemIdx] = useState(-1)

  // create a submit function, that takes the input field value and add it to the todo items state
  const onFormSubmit = (e) => {
    e.preventDefault()

    if (inputValue.length === 0) {
      alert('Insert value first')
      return
    } else {
      // if not in edit mode
      if (editItemIdx === -1)
        setToDoItems((currState) => {
          return [
            ...currState,
            {
              title: inputValue,
              createdDate: new Date().toDateString(),
              isCompleted: false,
            },
          ]
        })
      // if in edit mode
      else {
        setToDoItems((currState) => {
          return currState.map((saveItem, saveItemIdx) => {
            return saveItemIdx === editItemIdx
              ? { ...saveItem, title: inputValue }
              : saveItem
          })
        })
        setEditItemIdx(-1)
      }
    }

    setInputValue('')
  }

  // controlled component/input, when user types, save it in the state
  const onInputChange = (e) => {
    if (e.target.value.charAt(0) === ' ') {
      alert('TRY AGAIN')
      return
    } else setInputValue(e.target.value)
  }

  // create an edit function - better to do it at the end
  const onEdit = (toDo, toDoIdx) => {
    setEditItemIdx(toDoIdx)
    setInputValue(toDo.title)
  }

  // create a function that deletes the item from the list (i.e. update the todo items state)
  const onDelete = (toDoIdx) => {
    setToDoItems((currState) => {
      return currState.filter((item, itemIdx) => {
        return itemIdx !== toDoIdx ? true : false
      })
    })
  }

  // create a function that changes the "isCompleted" status
  const onComplete = (toDoIdx) => {
    // updating the state based on the current state, so use the callback way of to do
    setToDoItems((currState) => {
      return currState.map((currToDo, currToDoIdx) => {
        return currToDoIdx === toDoIdx
          ? {
              ...currToDo,
              isCompleted: !currToDo.isCompleted,
            }
          : currToDo
      })
    })
  }

  // create a function that cancels the edit mode
  const onEditCancel = () => {
    setEditItemIdx(-1)
    setInputValue('')
  }
  const saveInLocalStorage=()=>{
    localStorage.setItem(
      "my-to",
      JSON.stringify(toDoItems),
    )
  }
const readFromLocalStorage=()=>{
  const savedTodos=localStorage.getItem('my-to')
  const parsedSavedTodos= JSON.parse(savedTodos)
  if (Array.isArray(parsedSavedTodos))
  setToDoItems(parsedSavedTodos)
  else alert('Not Array')
}
  return (
    <div className='container'>
      {/* calls the submit function */}
   <div className='section-1' >
      <div>
      <form onSubmit={onFormSubmit}>
        <label >
        
          <input style={{ border: 'solid grey 1px',color:"grey",fontSize:"12px", borderRadius:"5px",width:"190px", padding:"5px", marginRight:"10px"}} 
            placeholder="Add to-do item"
            value={inputValue} //should read from the state
            onChange={onInputChange} // should update the state
          />
        </label>
        {/* if type is submit, it triggers the onSubmit event handler function when clicked */}
        <div >
        </div>
      </form>
      </div>
         <button style={{color:"Purple",fontSize:"25px",border:"white", backgroundColor:"white"}}>
          {/* if in edit mode, show Save button text */}
          {editItemIdx === -1 ? <BsFillArrowRightSquareFill/> : <IoSave/>}
        </button>
      
      </div>


      <div className='section-2'>
  
      <button className='button' onClick={saveInLocalStorage}>
        Save in localStorage
      </button>
      <button className='button' onClick={readFromLocalStorage}>
        Read from localStorage
      </button>
     
      </div>
      
  
        {/** todo items rendering */}

       
        {toDoItems.map((toDo, toDoIdx) => {
          return (
            <div className='section-3'>
            <div className='text'
              key={toDoIdx} // when mapping in jsx, each element must have a unqiue id
            // inline styling
            >
              <div className='section-3-1'>
              <div 
                style={
                  toDo.isCompleted // conditionally render the title style
                    ? { textDecoration: 'line-through',color:"green" }
                    : {}
                }
              >
                <b>{toDo.title}</b>
              </div>
              <br/>
              <div className='todo'>Date: {toDo.createdDate}</div>
              </div>
              {editItemIdx !== toDoIdx ? ( // do now show "Edit", "Delete" and "Complete" buttons if item is in edit mode
                <div className='buttons'>
                  <button className='button'
                  style={{color:"blue"}}
                    onClick={() => onEdit(toDo, toDoIdx)}
                  >
                    <FaPen/>
                  </button>
                  <button className='button'
                  style={{color:"red"}}
                  onClick={() => onDelete(toDoIdx)}>
                  <FaTrash/>
                  </button>
                  <button 
                  className='button'
                  style={{color:"green"}}
                    onClick={() => onComplete(toDoIdx)}
                  >
                   <HiCheckCircle/>
                  </button>
                </div>
              ) : (
                // if is in edit mode, show "Cancel" button
                <button onClick={onEditCancel}>
                  Cancel
                </button>
              )}
            </div>
            </div>
          )
        })}
        {/** style the todo item */}
        {/** todo item should include
         * 1. title
         * 2. date
         * 3. button 1 - calls the delete function
         * 4. button 2 - calls the function that changes the isCompleted
         * 5. button 3 - calls the edit function
         */}
  
    </div>
  )
}

/**
 * Structure of the todo list state data
    [
        {
            title: 'Finish Tic Tac Toe',
            createdDate: '2022-11-01 19:00 PM', // todo item created date
            isCompleted: true
        },
        {
            title: 'Finish Memory Game',
            createdDate: '2022-11-02 19:00 PM', // todo item created date
            isCompleted: false
        }
    ]
 */

