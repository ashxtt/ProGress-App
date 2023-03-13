import { Link } from 'react-router-dom'
export default function Home(props) {
    
    return(
        <div className="p-2 m-2 flex flex-col space-y-4 space-x-4 ">
            <h1 className='text-white text-2xl'>Start keep track of your life</h1>
            <button className='  w-fit text-white border rounded-md p-1 text-xl hover:shadow-dark shadow-xl'><Link to="/goals/add">Start Now</Link></button>
            <button className='w-fit text-white border rounded-md p-1 text-xl hover:shadow-dark shadow-xl'><Link to="/goals">Goals List</Link></button>
        
        </div>
        
    )
}