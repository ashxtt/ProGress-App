import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Goal from "../pages/Goal"
import Home from "../pages/Home"
import Show from "../pages/Show"

export default function Main(props) {
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

    const updateGoals = async (goal, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify(goal)
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
        <Route
          exact
          path="/"
          element={<Home goals={goals} />} />
        <Route
          path="/goals"
          element={<Goal createGoals={createGoals} />}
        />
        <Route
          path="/goals/:id"
          element={
            <Show
              goals={goals}
              updateGoals={updateGoals}
              deleteGoals={deleteGoals}
            />
          } />
      </Routes>
        </main>
    )

    
}