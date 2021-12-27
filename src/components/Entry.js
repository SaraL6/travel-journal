import ReactDOM from "react-dom"
import TravelPic from "../images/Fuji.jpg"
import Pin from "../images/Fill 219.png"

export default function Entry(props) {

    return (
        <main>
            <div class="container">
                <img src={props.imageUrl} alt="" className="entry--img" />
                <div className="entry--details">
                    <div className="entry--location">
                        <img src={Pin} alt="" className="entry--pin" />
                        <h4 className="entry--country">{props.location}</h4>
                        <a href={props.googleMapsUrl} className="entry--maps">View on Google Maps</a>
                    </div>
                    <h3 className="entry--title">{props.title}</h3>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>

                </div>

            </div>
            <hr />
        </main>


    )

}

ReactDOM.render(<Entry />, document.getElementById("root"))