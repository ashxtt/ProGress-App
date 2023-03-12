import {React, useState} from "react"
import {  useNavigate } from "react-router-dom"


export default function Addgoal(props){
    let navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        title: "",
        body: "",
        date: ""
    })

    const handleChange = (event) => {
        setNewForm((prevState) =>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createGoals(newForm);
        setNewForm({
            title: "",
            body: "",
            date: ""
        })
        navigate("/goals")
    }

        return (
            <section className="addgoal-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newForm.title} name="title" placeholder="What is your plan" onChange={handleChange} />

                    <input type="text" value={newForm.body} name="body" placeholder="Describe your plan/goal" onChange={handleChange} />

                    <input type="text" value={newForm.date} name="date" placeholder="00/00/0000" onChange={handleChange} />

                    <input id="add-button" className='input button' type="submit" value="Add" />

                </form>
            </section>
        )

}