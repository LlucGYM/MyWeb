import React, { useEffect } from "react";
import videoBg from "../assets/fondo.mp4";

export default function Video() {
    return (
        <div className="video">
            <video src={videoBg} autoPlay loop></video>
        </div>
    );
}