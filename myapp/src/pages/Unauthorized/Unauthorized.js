import {Link} from "react-router-dom";
import gandalf from "../../images/gandalf.png";
import "./Unauthorized.css";

const Unauthorized = () => {
    return(
        <div className="unauth-container">
            <img id="gandalf" src={gandalf} alt={"gandalf"} />
           <span>You dont have access to this site!</span>
            <Link to="/"><button className="return-button">Return to main page</button></Link>
        </div>
    )
}

export default Unauthorized;