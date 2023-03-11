
import { Link } from 'react-router-dom'

export default function Home(props) {
    const loaded = () => {
        return props.goals.map((goal) => (
            <div key={goal._id} className="goal">
                <Link to={`/goals/${goal._id}`}>
                    <h1>{goal.title}</h1>
                </Link>
                
                <h3>{goal.body}</h3>
                <h3>{goal.date}</h3>
            </div>
        ))
    }
    console.log(props)

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return(
        <div className="Home">
            <h1>hy</h1>
            <button><Link to="/goals">Start Now</Link></button>
        <section >
            {props.goals ? loaded() : loading()}
        </section>
        </div>
        
    )
}