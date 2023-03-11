import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function Show(props) {
    const { id } = useParams();
    const goal = props.goals.find((goal) => goal._id === id)
    
    let navigate = useNavigate();
  
    const [editForm, setEditForm] = useState(goal);
  
    // handleChange function for form
    const handleChange = (event) => {
      setEditForm(prevState => ({
        ...prevState,
        [event.target.title]: event.target.value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateGoals(editForm,goal._id);
      // redirect people back to index
      navigate("/goals");
    };
  
    const removeGoals = () => {
      props.deleteGoals(goal._id);
      // redirect people back to index
      navigate("/goals")
    };
  
    return (
      <div className='goals-show'>
        <div className="goals-show-info">
          <h1>{goal.title}</h1>
        
          <h3>{goal.body}</h3>
          <p>Date: {goal.date}</p>
          <p>Delete  <button id="delete" onClick={removeGoals}>
          DELETE
          </button>
          </p>
        </div>
        
        <form className="goal-show-form" onSubmit={handleSubmit}>
          Title: <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="goal title..."
            onChange={handleChange}
          />
          
         Body: <input
            type="text"
            value={editForm.body}
            name="body"
            placeholder="Whats the plan?..."
            onChange={handleChange}
          />
          Date: <input
            type="text"
            value={editForm.date}
            name="date"
            placeholder="00/00/0000"
            onChange={handleChange}
          />
          <input type="submit" value="Update Goal!" />
        </form>
      </div>
    );

}