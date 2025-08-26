import React, {useState}from "react"

function ToDo(){
    const [tasks , setTasks ]= useState(["study"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)

    }
 
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask])
        setNewTask("")
        }
        
        
    }
    function deleteTask(index){
        const updatedTasks  = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    return(
        <div className="container">
            <div className="to-do-list">
                <h1>to-do-list</h1>
                <div>
                    <input type="text" placeholder="add task" value={newTask}  onChange={handleInputChange} />
                    <button className="add-btn" onClick={addTask}>add</button>
                </div>
                <ol>
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button className="dlt-btn" onClick={() => deleteTask(index)}>Delete</button>
                    </li> 
                    )}
                </ol>
            </div>
        </div>
    )


}
export default ToDo