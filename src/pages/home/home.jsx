import "./home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);



  // Get Tasks

  const getTasks = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/api/todos",
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







  // Delete Task

  const deleteTask = async(id)=>{

    try{


      const response = await fetch(

        `http://localhost:3000/api/todos/${id}`,

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








  // Stats

  const totalTasks = tasks.length;


  const completedTasks = tasks.filter(
    task => task.completed
  ).length;



  const pendingTasks = tasks.filter(
    task => !task.completed
  ).length;



  const highPriority = tasks.filter(
    task => task.priority === "High"
  ).length;







  return (

    <div className="home">



      {/* Dashboard Cards */}

      <section className="stats">


        <div className="card total">

          <h2>
            {totalTasks}
          </h2>

          <p>
            Total Tasks
          </p>

        </div>





        <div className="card completed">

          <h2>
            {completedTasks}
          </h2>

          <p>
            Completed
          </p>

        </div>






        <div className="card pending">

          <h2>
            {pendingTasks}
          </h2>

          <p>
            Pending
          </p>

        </div>






        <div className="card high">

          <h2>
            {highPriority}
          </h2>

          <p>
            High Priority
          </p>

        </div>



      </section>







      {/* Recent Tasks */}


      <section className="recent">



        <div className="section-title">


          <h2>
            Recent Tasks
          </h2>



          <button
            onClick={()=>navigate("/create")}
          >

            + New Task

          </button>


        </div>






        <div className="task-grid">



        {

        tasks.length > 0 ?


        tasks.slice(0,4).map((task)=>(


          <div 
            className="task-card"
            key={task._id}
          >



            <h3>
              {task.title}
            </h3>





            <div className="badges">



              <span 
              className={
                `priority ${
                  task.priority
                  ? task.priority.toLowerCase()
                  :"low"
                }`
              }
              >

                {
                  task.priority || "Low"
                }


              </span>





              <span

              className={
                task.completed
                ?
                "completed"
                :
                "pending"
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







            <div className="buttons">


              <button

                className="edit"

                onClick={()=>navigate("/task")}

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
          No Tasks Available
        </h2>


        }



        </div>



      </section>



    </div>

  );
}


export default Home;