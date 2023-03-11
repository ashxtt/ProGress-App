import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Goal from "../pages/Goal"
import Home from "../pages/Home"

export default function Main(props) {
    const [goals, setGoals] = useState([])

    const getGoals = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)

        setGoals(data)
    }

    const createGoals = async (goals) => {
        await fetch(URL, {method: "POST", headers:{"Content-Type": "Application/json",}, body: JSON.stringify(goals),})
        getGoals()
    }

    const updateGoals = async (goals) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify(goals)
          })
          getGoals()
    }
    
    const deleteGoals = async (goals) => {
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
          element={<Index goals={goals} />} />
        <Route
          path="/goals"
          element={<Create createGoals={createGoals} />}
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