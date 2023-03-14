import {Link} from "react-router-dom"

function Index(props) {

  const loaded =()=>{

    return props.goals.map((goal) =>(
      <div className="p-3"  key = {goal._id}>
        <Link to={`/goals/${goal._id}`}>
          <div className="border rounded-md w-fit p-2 hover:shadow-dark shadow-xl">   
            <p className="text-2xl"><span className="text-4xl text-green">Your Goal:</span> {goal.title}</p>
          </div>
          
        </Link>
           
      </div>
    ))
 
  }
  const loading = () => {
    return <h1>Loading...</h1>
  }
  return(
  <div className="list-contents text-white p-2 m-0 ">
    <div id="content-title">
        <h2 className="text-2xl">Your List of Goals: </h2>
        
    </div>
    <div className="Goal-content text-3xl p-5">
        {props.goals ? loaded() : loading()}
    </div>
    
  </div>
  )
  }
  
  export default Index;