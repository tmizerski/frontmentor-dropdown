import React, {useEffect, useState} from "react";
import {Button} from "semantic-ui-react";
import EsotiqButton from "../EsotiqButton/EsotiqButton";

import "./Modal.css";

const Modal = ({head, content, buttons, submit, close,size }) => {
    const [objSize, setObjSize] = useState({});

    function getSize () {
        switch (size) {
            case 'small': ;
                return setObjSize({width: "20%", height: "15vh"});
            case 'medium':
                return setObjSize({width: "30%", height: "30vh"});
            case 'large':
                return setObjSize({width: "40%", height: "35vh"});
            default: return
        }
    }

    // function renderButton() {
    //     buttons.forEach((btn, k) => {
    //         return <EsotiqButton
    //             label={btn.label}
    //             key={k}
    //             bgcolor={btn.bgcolor || null}
    //             color={btn.color || null}
    //             click={}
    //         />
    //     })
    // }

    useEffect(()=>{
        getSize()
    },[])

    return (
        <>
            <div className={"modal-dimmer"} style={{
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
                <div className={`modal`} style={size && {
                    width: objSize.width,
                    height: objSize.height
                }}>
                    {head &&
                        <div className={"modal-head"}>
                            {head}
                        </div>}
                    {content &&
                        <div className={"modal-content"}>
                            {content}
                        </div>}
                    <div className={"modal-action"}>
                        {submit &&
                            <EsotiqButton
                                label={"Akceptuj"}
                                click={submit}
                                color={"white"}
                            />
                        }
                            <EsotiqButton
                                label={"Zamknij"}
                                click={close}
                                bgcolor={"close"}
                                color={"white"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;