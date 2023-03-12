import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const goal = props.goals.find((goal) => goal._id === id)
  console.log(props.goals)

  return (
    <div>
      <div >
        <div id="list">
          <h3>{goal.title}</h3>
          <h3>{goal.body}</h3>
          <h3>{goal.date}</h3>
            
            
        </div>
        
      </div>
      
      
     
      <Link to={`/goals/${goal._id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>

    </div>
  )

}

export default Show;