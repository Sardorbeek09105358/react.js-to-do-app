import { Route, Routes } from "react-router-dom"
import About from "./About"
import Form from "./Form"

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Form/>}/>
                <Route path="About" element={<About/>}/>
            </Routes>
        </div>
    )
}

export default App
