import "./create.css";

function CreateTask() {
  return (
    <div className="task-container">
      <div className="task-card">
        <h1>Create New Task</h1>
        <p>Add a new task to your todo list</p>

        <form>
          <div className="input-group">
            <label>Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              rows="5"
              placeholder="Enter task description"
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
              <input type="date" />
            </div>
          </div>

          <button className="create-btn">
            + Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;