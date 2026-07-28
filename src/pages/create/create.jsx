import "./create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTask() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:3000/api/todos",
        {
          method: "POST",

          headers:{
            "Content-Type":"application/json",
          },

          credentials:"include",

          body: JSON.stringify(formData),

        }
      );


      const data = await response.json();



      if(response.ok){

        alert(data.message || "Task Created Successfully");

        // Task list page par bhej do
        navigate("/task");

      }
      else{

        alert(data.message || "Task Create Failed");

      }



    }catch(error){

      console.log(error);
      alert("Server Error");

    }

  };



  return (
    <div className="task-container">

      <div className="task-card">

        <h1>Create New Task</h1>

        <p>Add a new task to your todo list</p>



        <form onSubmit={handleSubmit}>


          <div className="input-group">

            <label>Task Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
              required
            />

          </div>




          <div className="input-group">

            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              placeholder="Enter task description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>


          </div>





          <div className="input-row">


            <div className="input-group">

              <label>Priority</label>

              <select>

                <option>Low</option>

                <option>Medium</option>

                <option>High</option>

              </select>


            </div>




            <div className="input-group">

              <label>Due Date</label>

              <input 
                type="date"
              />


            </div>


          </div>





          <button 
            className="create-btn"
            type="submit"
          >

            + Create Task

          </button>



        </form>


      </div>


    </div>
  );
}


export default CreateTask;