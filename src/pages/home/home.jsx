import "./home.css";

function Home() {
  const tasks = [
    {
      id: 1,
      title: "Complete React UI",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Learn Express",
      priority: "Medium",
      status: "Completed",
    },
    {
      id: 3,
      title: "MongoDB Practice",
      priority: "Low",
      status: "Pending",
    },
    {
      id: 4,
      title: "Authentication",
      priority: "High",
      status: "Pending",
    },
  ];

  return (
    <div className="home">

      {/* Dashboard Cards */}
      <section className="stats">

        <div className="card total">
          <h2>12</h2>
          <p>Total Tasks</p>
        </div>

        <div className="card completed">
          <h2>7</h2>
          <p>Completed</p>
        </div>

        <div className="card pending">
          <h2>5</h2>
          <p>Pending</p>
        </div>

        <div className="card high">
          <h2>2</h2>
          <p>High Priority</p>
        </div>

      </section>

      {/* Recent Tasks */}

      <section className="recent">

        <div className="section-title">
          <h2>Recent Tasks</h2>

          <button>+ New Task</button>
        </div>

        <div className="task-grid">

          {tasks.map((task) => (
            <div className="task-card" key={task.id}>

              <h3>{task.title}</h3>

              <div className="badges">

                <span className={`priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>

                <span className={task.status.toLowerCase()}>
                  {task.status}
                </span>

              </div>

              <div className="buttons">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;