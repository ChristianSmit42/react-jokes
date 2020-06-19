import React from "react";
import LogoArea from "./LogoArea";
import {AppBar} from "@material-ui/core";
import Navigation from "./Navigation";

import "./Header.css";

export default function Header() {

    return (
        <AppBar className={"headerStyle"} position={"static"}>
            <LogoArea/>
            <Navigation/>
        </AppBar>
    );
}