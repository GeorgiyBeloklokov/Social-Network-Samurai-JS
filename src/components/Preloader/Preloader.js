import loader from "../../assets/images/loader.svg";
import React from "react";
import style from "./Preloader.module.css"

let Preloader = () => {
    return <div>
    <img alt= 'loader' src={loader} className={style.loader}/>
</div>
}
export default Preloader;