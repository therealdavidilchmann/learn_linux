import React, { useState } from "react";
import '../css/card.css';


const getCommands = (category, commands) => {
    var comms = [];
    commands.forEach(command => {
        if (command.category === category) {
            comms.push(command)
        }
    });
    return comms
}

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const Card = props => {
    const category = props.match.params.id;
    const [commands, setCommands] = useState(() => getCommands(category, props.commands));
    const [randomInt, setRandomInt] = useState(() => getRandomInt(commands.length));
    const [showing, setShowing] = useState("command");

    const [command, setCommand] = useState(commands[randomInt]["command"]);
    const [result, setResult] = useState(commands[randomInt]["use"]);

    const onClickCard = () => {
        if (showing === "command") {
            setShowing("all");
        } else {
            setShowing("command");
            
            setRandomInt(getRandomInt(commands.length));
            setCommand(commands[randomInt]["command"]);
            setResult(commands[randomInt]["use"])
        }
    }

    return (
        <div onClick={onClickCard} className="card" >
            <p className="commandLabel">{command}</p>
            <p className="resultLabel">{(showing !== "command") ? result : ""}</p>
        </div>
    )
}

export default Card;
