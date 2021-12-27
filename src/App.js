import ReactDOM from "react-dom"
import Entry from "./components/Entry"
import Navbar from "./components/Navbar"
import Data from "./data"

export default function App() {

    const entries = Data.map(data=>{
        return  <Entry 
                    key={data.id}
                    {...data} />
    })
    return (
        <div >
            <Navbar  />
            {entries}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))