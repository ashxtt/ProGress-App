import { Link } from 'react-router-dom'
export default function Header(props) {

    return (
        <div className="bg-black p-2 shadow-dark shadow-md">
      <p className="text-white text-6xl font-bold">
      <Link to="/">ProGress</Link>
      </p>
      
    </div>
    );
}