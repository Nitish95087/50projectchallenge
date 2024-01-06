import FunnyHelloWorld from "./projects/funnyHelloWorld/FunnyHelloWorld"
import TodoLIst from "./projects/todoList/TodoLIst"
import SimpleCalculator from "./projects/simpleCalculator/SimpleCalculator"
import './App.css'

export default function App() {
  return (
    <div className={`w-full h-screen flex items-center justify-center`}>
     {/* <FunnyHelloWorld /> */}
     {/* <TodoLIst/> */}
     <SimpleCalculator/>
    </div>
  )
}