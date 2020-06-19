import {Grid} from "@material-ui/core";
import React from "react";

import "./LogoArea.css";


export default function LogoArea(){
    return(
        <Grid container direction="row" justify="space-around" alignItems="flex-start">
            <Grid item xs={2}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71iXP+-teoL.png" alt="" width="100%" className={"logoImage"}/>
            </Grid>
            <Grid item xs={10}>
                <h1>
                    JOKES ARE AWESOME
                </h1>
            </Grid>
        </Grid>
    );
}