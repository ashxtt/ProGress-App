import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const goal = props.goals.find((goal) => goal._id === id)
  console.log(props.goals)

  return (
    <div className="text-2xl">
      <div className=" p-6" >
        <div className="goal-view text-white p-1">
          <div className="flex justify-center space-x-4">
            <h1 className="text-2xl text-bold">Your Plan:</h1>
            <h1 className="text-2xl">{goal.title}</h1>
          </div>
          <div className="flex-col flex justify-center items-center">
            <h1>Course of Action: </h1>
            <div className="border w-fit p-2 rounded">
              <h3 className="w-max">{goal.body}</h3>
              <h3>{goal.date}</h3>
            </div>
            
          </div>
          
          
            
            
        </div>
        
        <div className="flex justify-center">
        <Link to={`/goals/${goal._id}/edit`}><button  className="edit-button text-white border rounded-md p-1 w-72 hover:shadow-dark shadow-xl">Edit</button></Link>
        </div>
        
      </div>
      
    </div>
  )

}

export default Show;