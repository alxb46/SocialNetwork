import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div style={{display: "flex", position: "absolute", margin: "200px 400px"}}>
            <img src={preloader} alt={'loader'}/>
        </div>
    );
}

export default Preloader;