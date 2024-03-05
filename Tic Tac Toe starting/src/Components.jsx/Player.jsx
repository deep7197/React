import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
   const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing(/*  !isEditing *//* isEditing ? false : true */ (editing) => !editing)

    }

    let editalbePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "save"
    if (isEditing) {
        editalbePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    return (<li className={isActive ? "active" : undefined}  >
        <span className="player">
        <span className="player-name">{editalbePlayerName}</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <span><button onClick={handleEditClick} >{isEditing ? "save" : "Edit"}</button></span>
    </li>
    );
}