import Todos from "./components/todos"
import "./App.css"
import Navbar from "./components/navbar"
import AddToDo from "./components/addtodo"

const App = () => {
  return (
   <main>
      <h1 className="h1">TODO LIST </h1>
      <div>
      <Navbar />
      <AddToDo/>  
      <Todos />
      </div>
   </main>
  )
}

export default App