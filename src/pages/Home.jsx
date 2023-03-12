import { Link } from 'react-router-dom'
export default function Home(props) {
    
    return(
        <div className="Home">
            <h1>Start keep track of your life</h1>
            <button><Link to="/goals">Start Now</Link></button>
        
        </div>
        
    )
}