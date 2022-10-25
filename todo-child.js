import React from "react";

const ToDoListChild=(props)=>{
    return (
        <div className="lists">
            <div className="list ">{props.listInfo.todolist}</div>
            <div className="list1 ">{props.listInfo.todolist1}</div>
            <div className="list2 ">{props.listInfo.todolist2}</div>
            <div className="list3 ">{props.listInfo.todolist3}</div>
            <div className="list4 ">{props.listInfo.todolist4}</div>
            <div className="list5 ">{props.listInfo.todolist5}</div>

        </div>
    )
}
    export default ToDoListChild