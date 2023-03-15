import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Addgoal from "../pages/Addgoal"
import Editgoal from "../pages/Editgoal"
import Home from "../pages/Home"
import Show from "../pages/Show"
import Index from "../pages/Index"

export default function Main(props) {
  const URL = "https://pacific-sea-65631.herokuapp.com/"

    const [goals, setGoals] = useState([])

    const getGoals = async () => {
        const response = await fetch(URL)
        const data = await response.json()

        setGoals(data)
        console.log(data)
    }

    const createGoals = async (goal) => {
        await fetch(URL, {
            method: "POST", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(goal), 
            
        })
        getGoals()

    }

    const updateGoals = async (goals, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify(goals)
          })
          getGoals()
    }
    
    const deleteGoals = async (id) => {
        await fetch(URL + id,{method: 'DELETE'})
        getGoals()
    }

    useEffect(() => {
      
        getGoals()
    }, [])

    return (
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
        
          <Route exact path="/goals/" element={<Index goals={goals} />} />
        <Route
          path="/goals/add"
          element={<Addgoal createGoals={createGoals} />}
        />
        <Route path="/goals/:id/edit" element = {<Editgoal goals = {goals} updateGoals = {updateGoals} deleteGoals = {deleteGoals} />} />
        <Route
          path="/goals/:id"
          element={
            <Show
              goals={goals}
              
            />
          } />
      </Routes>
        </main>
    )

    
}