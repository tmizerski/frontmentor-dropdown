import {Link} from "react-router-dom";
import gandalf from "../../images/gandalf.png";
import "./Unauthorized.css";

const Unauthorized = () => {
    return(
        <div className="unauth-container">
            <img src={gandalf} alt={"gandalf"} />
           <span>You dont have access to this site!</span>
            <button className="return-button"><Link to="/">Return to main page</Link></button>
        </div>
    )
}

export default Unauthorized;