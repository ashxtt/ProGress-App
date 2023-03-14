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
            <div className="p-8 flex items-center justify-center gap-4 space-x-6 lg:space-x-12">
                <section className="bg-black gap-4">
                <form className="p-8 flex items-center justify-center gap-4 space-x-6 lg:space-x-12" onSubmit={handleSubmit}>
                    <input type="text" className="rounded-md p-2 hover:shadow-dark shadow-md" value={newForm.title} name="title" placeholder="What is your plan" onChange={handleChange} />

                    <input className="rounded-md p-2 hover:shadow-dark shadow-md" type="text" value={newForm.body} name="body" placeholder="Describe your plan/goal" onChange={handleChange} />

                    <input className="rounded-md p-2 hover:shadow-dark shadow-md" type="text" value={newForm.date} name="date" placeholder="00/00/0000" onChange={handleChange} />

                    <input  className='cursor-pointer w-20 text-white border rounded-md p-2 hover:shadow-dark shadow-lg' type="submit" value="Add" />

                </form>
            </section>
            </div>
            
        )

}