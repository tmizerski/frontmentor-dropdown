import React from "react";
import imageHeroDesktop from '../../images/image-hero-desktop.png';
import databiz from "../../images/client-databiz.svg";
import maker from "../../images/client-maker.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import "./index.css";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
            <div className="mainContent-container">
                <div className="mainLeft-container">
                    <h1>
                        <p>Make</p>
                        <p>remote work</p>
                    </h1>
                    <section className="text-section">
                        <p> Get your team in sync, no matter your location.</p>
                        <p>Streamline processes, create ream rituals, </p>
                        <p>and watch productivity soar</p>
                    </section>
                    <button className="main-button">Learn more</button>
                    <section className="logo-section">
                        <img src={databiz} alt={"dataBiz logo"}/>
                        <img src={audiophile} alt={"audiophile logo"}/>
                        <img src={meet} alt={"meet logo"}/>
                        <img src={maker} alt={"maker logo"}/>
                    </section>
                </div>
                <div className="mainImg-container"><img src={imageHeroDesktop} alt={"main"}/></div>
            </div>
            </div>
        )
    }
}

export default Main;