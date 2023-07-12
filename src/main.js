import React from "react";
import RepoList from "./components/RepoList";
import Profile from "./components/Profile";

export default function Main(){

    return(
        <div id="main">
            <Profile/>
            <RepoList/>
        </div>
    );
}