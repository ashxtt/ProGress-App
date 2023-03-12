import {Link} from "react-router-dom"

function Index(props) {

  const loaded =()=>{

    return props.goals.map((goal) =>(
      <div  key = {goal._id}>
        <Link to={`/goals/${goal._id}`}>
          <div className="goals">   
            <p>{goal.title}</p>
          </div>
          
        </Link>
           
      </div>
    ))
 
  }
  const loading = () => {
    return <h1>Loading...</h1>
  }
  return(
  <div className="content-margin">
    <div id="content-title">
        <h3 className="title">Your Goal List: </h3>
        
    </div>
    <div className="index-container">
        {props.goals ? loaded() : loading()}
    </div>
    
  </div>
  )
  }
  
  export default Index;