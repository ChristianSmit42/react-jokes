import React from "react";
import "./JokeCard.css"
import {Card, CardMedia, CardContent, Typography, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    media: {
        height: 120,
    },
});

export default function JokeCard() {
    const classes = useStyles();
    return (
        <Card className={"JokeCard"}>
            <CardMedia
                className={classes.media}
                image="https://www.koelle-zoo.de/media/image/7a/04/63/Hunde_Milchz-ahne.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
}