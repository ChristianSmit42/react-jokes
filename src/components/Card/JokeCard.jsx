import React, {useContext} from "react";
import "./JokeCard.css"
import {Card, CardMedia, CardContent, Typography, makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../App";


const useStyles = makeStyles({
    media: {
        height: 120,
        maxWidth: "600px",
    },
    light: {
        backgroundColor: "rgba(255,255,255,1)",
        color: "rgba(0,0,0,1)",
    },
    dark: {
        backgroundColor: "rgba(0,0,0,1)",
        color: "rgba(255,255,255,1)",
    }
});

export default function JokeCard(props) {
    const classes = useStyles();
    const theme = useContext(ThemeContext);
    return (
        <Card className={classes[theme]}>
            <CardMedia
                className={classes.media}
                image="https://www.koelle-zoo.de/media/image/7a/04/63/Hunde_Milchz-ahne.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography className={classes[theme]} gutterBottom variant="h5" component="h2">
                    {props.joke.type}
                </Typography>
                <Typography className={classes[theme]} variant="body2" color="textSecondary" component="p">
                    Setup: {props.joke.setup}
                </Typography>
                <Typography className={classes[theme]} variant="body2" color="textPrimary" component="p">
                    Punchline: {props.joke.punchline}
                </Typography>
            </CardContent>
        </Card>
    );
}