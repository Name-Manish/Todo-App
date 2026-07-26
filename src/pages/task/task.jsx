import "./task.css";

function Task() {
  const tasks = [
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish Todo Application UI",
      priority: "High",
      dueDate: "25 Jul 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "Learn Node.js",
      description: "Complete Express Middleware",
      priority: "Medium",
      dueDate: "27 Jul 2026",
      status: "Completed",
    },
    {
      id: 3,
      title: "Workout",
      description: "30 Minutes Exercise",
      priority: "Low",
      dueDate: "Today",
      status: "Pending",
    },
  ];

  return (
    <div className="task-page">

      <div className="task-header">
        <h1>My Tasks</h1>

        <div className="top-bar">
          <input
            type="text"
            placeholder="Search Task..."
          />

          <select>
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      <div className="task-list">

        {tasks.map((task) => (
          <div className="task-card" key={task.id}>

            <div className="task-top">

              <h2>{task.title}</h2>

              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>

            </div>

            <p>{task.description}</p>

            <div className="task-info">
              <span>📅 {task.dueDate}</span>
              <span>{task.status}</span>
            </div>

            <div className="task-buttons">

              <button className="complete">
                Complete
              </button>

              <button className="edit">
                Edit
              </button>

              <button className="delete">
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Task;