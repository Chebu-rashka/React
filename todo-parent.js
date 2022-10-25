import React from 'react'
import ToDoListChild from './todo-child'


const lists=[
    {todolist:"To Do List"},

    {todolist1:"1.Do homework 📚"},
    {todolist2:"2.Go to gym and do cardio 🧘‍♀️"},
    {todolist3:"3.Make reservation for Bordel at 12pm 🍸"},
    {todolist4:"4.Work on your year resolution 🎄"},
    {todolist5:"5.Make a gift list for your loved ones 🎁"}
]

const ToDoListParent = () => {
    return (
        <div className='listall'> 
            {lists.map((list, listIdx)=>{
            return(
                <ToDoListChild listInfo={list} listIdx={listIdx}
                key={listIdx}/>
            )
            })}
        </div>  
    )
}

export default ToDoListParent
