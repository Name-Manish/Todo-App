import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);



  // Get Profile + Tasks

  useEffect(() => {


    const getData = async () => {


      try {


        // Profile API

        const profileRes = await fetch(
          "http://localhost:3000/api/users/profile",
          {
            method:"GET",
            credentials:"include",
          }
        );


        const profileData = await profileRes.json();



        if(profileRes.ok && profileData.success){

          setUser(profileData.user);

        }
        else{

          navigate("/login");

          return;

        }






        // Todo API

        const taskRes = await fetch(
          "http://localhost:3000/api/todos",
          {
            method:"GET",
            credentials:"include",
          }
        );


        const taskData = await taskRes.json();



        if(taskRes.ok){

          setTasks(taskData.todos);

        }



      }
      catch(error){

        console.log(error);

        navigate("/login");

      }
      finally{

        setLoading(false);

      }


    };



    getData();


  },[navigate]);









  // Logout

  const handleLogout = async()=>{


    try{


      const res = await fetch(

        "http://localhost:3000/api/users/logout",

        {
          method:"POST",
          credentials:"include",
        }

      );



      if(res.ok){

        alert("Logout Successfully");

        navigate("/login");

      }



    }
    catch(error){

      console.log(error);

    }


  };







  // Task Stats

  const totalTask = tasks.length;


  const completedTask = tasks.filter(
    task=>task.completed
  ).length;



  const pendingTask = tasks.filter(
    task=>!task.completed
  ).length;



  const progress = totalTask > 0
  ?
  Math.round(
    (completedTask / totalTask) * 100
  )
  :
  0;







  if(loading){

    return <h2>Loading...</h2>;

  }







  return (

    <div className="profile-page">


      <div className="profile-card">





        <div className="profile-header">


          <img

            src="https://i.pravatar.cc/150?img=12"

            alt="Profile"

          />



          <h2>

            {user?.name}

          </h2>



          <p>

            Todo User

          </p>


        </div>







        <div className="profile-details">



          <div>

            <span>
              Name
            </span>

            <h4>
              {user?.name}
            </h4>


          </div>






          <div>

            <span>
              Email
            </span>


            <h4>
              {user?.email}
            </h4>


          </div>






          <div>

            <span>
              Joined
            </span>


            <h4>

              {
                user?.createdAt
                ?
                new Date(
                  user.createdAt
                ).toLocaleDateString()
                :
                "N/A"
              }

            </h4>


          </div>



        </div>








        <div className="task-stats">



          <div>

            <h3>
              {totalTask}
            </h3>

            <p>
              Total Tasks
            </p>

          </div>






          <div>

            <h3>
              {completedTask}
            </h3>

            <p>
              Completed
            </p>

          </div>






          <div>

            <h3>
              {pendingTask}
            </h3>

            <p>
              Pending
            </p>

          </div>






          <div>

            <h3>
              {progress}%
            </h3>

            <p>
              Progress
            </p>

          </div>



        </div>







        <div className="btn-group">



          <button className="edit-btn">

            Edit Profile

          </button>





          <button

            className="logout-btn"

            onClick={handleLogout}

          >

            Logout

          </button>



        </div>






      </div>



    </div>

  );

};


export default Profile;