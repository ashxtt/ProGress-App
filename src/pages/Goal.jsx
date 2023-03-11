import {React, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"


export default function Goal(props){
    const [newForm, setNewForm ] = useState({
        title: "",
        body: "",
        date: ""
    })

    let navigate = useNavigate();

    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createGoals(newForm)

        setNewForm({
            title: "",
            body: "",
            date: ""
        })
        navigate("/goals");
    }

    return (
        <section className="create-goal">
            <form onSubmit={handleSubmit}>
                Title: <input type="text" value={newForm.title} name="title" placeholder="Your goal here..." required onChange={handleChange} />

                Body: <input type="text" value={newForm.body} name="body" placeholder="Whats the plan?..." required onChange={handleChange} />

                Date: <input type="text" value={newForm.date} name="date" placeholder="00/00/0000" required onChange={handleChange} />

                <input type="submit" value="Commit!"  />

            </form>
        </section>
    )
}