import React, {useEffect, useState} from "react";
import {multiMailer} from "../../helpers/multiMailer";

const ProgressBar = ({bgcolor, completed}) => {
    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }


    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed.toFixed(2)}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;