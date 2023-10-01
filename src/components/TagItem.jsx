import React from "react";

export default function TagItem (props) {
    function img (){
        if (props.img != null){
            return (<img src={props.img} alt="BrandLogo"></img>)
        }
    }
    return (<p className="TagItem"><span className="enfasis1">{props.text1} </span> 
        {props.text2}
        {img()}
    </p>);
}