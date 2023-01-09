import React from "react";
import "./ErrorHandler.css";

const ErrorHandler = ({error}) => {
    return(
        <div className="error--handler"><span>{error}</span>
        </div>
    )
}

export default ErrorHandler;