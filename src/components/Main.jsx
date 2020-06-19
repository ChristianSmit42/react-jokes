import React, {useEffect, useState} from "react";
import "./Main.css";
import JokeRandom from "./pages/JokeRandom";
import JokeTen from "./pages/JokeTen";
import {Route, Switch} from "react-router";

export default function Main() {





    return (
        <main className={"Main"}>

            <Switch>
                <Route exact path={"/random"}>
                    <h2>random Joke</h2>
                    <JokeRandom></JokeRandom>
                </Route>
                <Route exact path={"/randomten"}>
                    <h2>random Joke</h2>
                    <JokeTen></JokeTen>
                </Route>
                <Route path={"/"}>
                    <p>Wanna laugh?</p>
                </Route>
            </Switch>
        </main>
    );
}