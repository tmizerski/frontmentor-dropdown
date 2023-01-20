import React from "react";
import "./EsotiqButton.css";

const EsotiqButton = ({label, color, bgcolor, click}) => {

    const getBgColor = (bgcolor) => {
        switch(bgcolor) {
            case "block":
                return "rgba(218, 167, 29, 0.65)";
            case "delete":
                return "rgba(237, 52, 52, 0.7)";
            case "close":
                return "rgba(237, 52, 52, 0.7)";
            case "accept":
                return "rgba(17, 197, 17, 0.65)";
            default : return bgcolor
        }
    }

    return (
        <button
            className={"esotiq-button"}
            style={{
                color: `${color || "black"}`,
                background: `${getBgColor(bgcolor) || "royalblue"}`
        }}
            onClick={click}
        >
            {label}
        </button>
    )
}

export default EsotiqButton;