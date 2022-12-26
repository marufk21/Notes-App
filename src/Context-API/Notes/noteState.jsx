import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "Harry",
        "class": "5b"
    }
    return (
        <NoteContext.Provider value={s1}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;