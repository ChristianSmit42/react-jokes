import {Grid} from "@material-ui/core";
import React from "react";


export default function LogoArea(){
    return(
        <Grid container direction="row" justify="space-around" alignItems="flex-start">
            <Grid item xs={4}>
                Bild
            </Grid>
            <Grid item xs={8}>
                <h1>
                    JOKES ARE AWESOME
                </h1>
            </Grid>
        </Grid>
    );
}