import React from "react";
import LogoArea from "./Header/LogoArea";
import {Grid, AppBar, Menu, MenuItem, Button} from "@material-ui/core";
import Navigation from "./Header/Navigation";

export default function Header() {



    return (
        <AppBar>
            <LogoArea/>
            <Navigation/>
        </AppBar>
    );
}