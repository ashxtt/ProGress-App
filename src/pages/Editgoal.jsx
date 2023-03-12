import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Editgoal(props) {
    const {id} = useParams(); 
    const goal = props.goals.find((goal)=>goal._id === id)
    let navigate = useNavigate()

    const[editForm, setEditform] = useState(goal)

    const handleChange = (event) => {
        setEditform((prevState) => ({
            ...prevState, [event.target.name]: event.target.value,
        }))
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateGoals(editForm, goal._id)
        //see if it works
        console.log(editForm)
        navigate("/goals")
    }

    const removeGoal = () => {
        props.deleteGoals(goal._id)
        navigate("/goals")
    }

    return(
        <section className="content-layout">
            
          <form onSubmit={handleSubmit}>
            <div>
              Title:<input
              className="input"
              type="text"
              value={editForm.title}
              name="title"
              placeholder="whats your plan"
              onChange={handleChange}
            />
            </div>
            <div>
              Body:<input
              className="input"
              type="text"
              value={editForm.body}
              name="body"
              placeholder="Describe your plan/goal"
              onChange={handleChange}
            /> 
            </div>
            <div>
              Date:<input
              className="input"
              type="text"
              value={editForm.date}
              name="date"
              placeholder="00/00/0000"
              onChange={handleChange}
            /> 
            </div>
            
        
            
            
            
            <div><input id = "update-button"className="input" type="submit" value="Update"/></div>
            <button id="delete-button" className="input button" onClick = {()=>removeGoal(goal._id)}>Delete</button>

          </form>
        </section>
      )

}