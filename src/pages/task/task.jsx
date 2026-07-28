import "./task.css";
import { useEffect, useState } from "react";

function Task() {

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");


  // Edit Modal State
  const [editOpen, setEditOpen] = useState(false);

  const [editTask, setEditTask] = useState({
    id: "",
    title: "",
    description: "",
  });



  // Get All Tasks

  const getTasks = async () => {

    try {

      const response = await fetch(
        "https://todo-app-server-52ha.onrender.com/api/todos",
        {
          method:"GET",
          credentials:"include",
        }
      );


      const data = await response.json();


      if(response.ok){

        setTasks(data.todos);

      }


    } catch(error){

      console.log(error);

    }

  };



  useEffect(()=>{

    getTasks();

  },[]);




  // Complete Toggle

  const completeTask = async(id)=>{

    try{

      const response = await fetch(
        `https://todo-app-server-52ha.onrender.com/api/todos/toggle/${id}`,
        {
          method:"PATCH",
          credentials:"include",
        }
      );


      if(response.ok){

        getTasks();

      }


    }catch(error){

      console.log(error);

    }

  };





  // Delete Task

  const deleteTask = async(id)=>{


    try{


      const response = await fetch(
        `https://todo-app-server-52ha.onrender.com/api/todos/${id}`,
        {
          method:"DELETE",
          credentials:"include",
        }
      );



      if(response.ok){

        getTasks();

      }



    }catch(error){

      console.log(error);

    }


  };







  // Open Edit Box

  const openEditBox = (task)=>{


    setEditTask({

      id:task._id,

      title:task.title,

      description:task.description

    });


    setEditOpen(true);


  };







  // Update Task

  const updateTask = async(e)=>{


    e.preventDefault();



    try{


      const response = await fetch(

        `https://todo-app-server-52ha.onrender.com/api/todos/${editTask.id}`,

        {

          method:"PUT",

          headers:{

            "Content-Type":"application/json",

          },


          credentials:"include",


          body:JSON.stringify({

            title:editTask.title,

            description:editTask.description,

          })

        }

      );




      if(response.ok){


        alert("Task Updated Successfully");


        setEditOpen(false);


        getTasks();


      }



    }catch(error){

      console.log(error);

    }


  };







  // Search + Filter

  const filteredTasks = tasks.filter((task)=>{


    const searchMatch = task.title
    .toLowerCase()
    .includes(search.toLowerCase());



    const filterMatch =

      filter==="All"

      ||

      (filter==="Completed" && task.completed)

      ||

      (filter==="Pending" && !task.completed);



    return searchMatch && filterMatch;


  });






  return (

    <div className="task-page">



      <div className="task-header">


        <h1>
          My Tasks
        </h1>



        <div className="top-bar">


          <input

            type="text"

            placeholder="Search Task..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />




          <select

            value={filter}

            onChange={(e)=>setFilter(e.target.value)}

          >

            <option>
              All
            </option>


            <option>
              Completed
            </option>


            <option>
              Pending
            </option>


          </select>



        </div>


      </div>








      <div className="task-list">


      {

      filteredTasks.length > 0 ?


      filteredTasks.map((task)=>(


        <div 
          className="task-card"
          key={task._id}
        >



          <div className="task-top">


            <h2>
              {task.title}
            </h2>



            <span
              className={
                task.completed
                ?
                "status completed"
                :
                "status pending"
              }
            >

              {
                task.completed
                ?
                "Completed"
                :
                "Pending"
              }


            </span>


          </div>




          <p>
            {task.description}
          </p>





          <div className="task-info">


            <span>
              📅 {new Date(task.createdAt)
              .toLocaleDateString()}
            </span>



          </div>







          <div className="task-buttons">


            <button

              className="complete"

              onClick={()=>completeTask(task._id)}

            >

              {
                task.completed
                ?
                "Undo"
                :
                "Complete"
              }


            </button>





            <button

              className="edit"

              onClick={()=>openEditBox(task)}

            >

              Edit

            </button>






            <button

              className="delete"

              onClick={()=>deleteTask(task._id)}

            >

              Delete

            </button>



          </div>



        </div>



      ))


      :

      <h2>
        No Task Found
      </h2>


      }



      </div>









      {/* EDIT MODAL */}



      {

      editOpen &&

      (

      <div className="edit-overlay">


        <div className="edit-box">


          <h2>
            Edit Task
          </h2>



          <form onSubmit={updateTask}>



            <label>
              Title
            </label>


            <input

              type="text"

              value={editTask.title}

              onChange={(e)=>

                setEditTask({

                  ...editTask,

                  title:e.target.value

                })

              }

            />





            <label>
              Description
            </label>


            <textarea

              rows="5"

              value={editTask.description}


              onChange={(e)=>

                setEditTask({

                  ...editTask,

                  description:e.target.value

                })

              }

            />






            <div className="edit-actions">


              <button

                className="update-btn"

                type="submit"

              >

                Update

              </button>





              <button

                type="button"

                className="cancel-btn"

                onClick={()=>setEditOpen(false)}

              >

                Cancel

              </button>



            </div>



          </form>



        </div>


      </div>

      )


      }



    </div>

  );

}


export default Task;