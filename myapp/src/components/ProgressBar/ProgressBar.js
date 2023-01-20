import React, {useEffect, useState} from "react";
import {multiMailer} from "../../helpers/multiMailer";

const ProgressBar = ({bgcolor, completed}) => {
    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#e0e0de",
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor || "royalblue",
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }


    return (
        <>
            <div style={{
                position: "fixed",
                top: "0",
                left: 0,
                minWidth: "100%",
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(230, 233, 236, 0.31)",
                backdropFilter: "blur(1px)",
                zIndex: 99999
            }}>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                        <span style={labelStyles}>{`${completed.toFixed(2)}%`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;