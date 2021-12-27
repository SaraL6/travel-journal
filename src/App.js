import ReactDOM from "react-dom"
import Entry from "./components/Entry"
import Navbar from "./components/Navbar"

export default function App(){
    return(
        <div>
            <Navbar/>
            <Entry/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))