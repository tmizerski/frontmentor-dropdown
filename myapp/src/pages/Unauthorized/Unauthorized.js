import {Navigate} from "react-router-dom";

const Unauthorized = () => {
    return(
        <div>
           <span>Nie masz dostępu do tej strony!</span>
            <button><Navigate to="/">Powrót do strony głównej</Navigate></button>
        </div>
    )
}

export default Unauthorized;