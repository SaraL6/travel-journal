import ReactDOM from "react-dom"
import Earth from "../images/Fill213.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Earth} alt="" className="nav--img" />
            <h3 className="nav--title">My travel journal</h3>
        </nav>
    )

}

ReactDOM.render(<Navbar />, document.getElementById("root"))