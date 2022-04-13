import React, {MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }

    const addUser = () => {
        alert('User should be added')
    }

    const onChangeTextAreaHandler = () => {
        console.log('textarea changed')
    }

    const onFocusInputHandler = () => {
        console.log('focused')
    }

    return (
        <div>
            <textarea tabIndex={1} onChange={onChangeTextAreaHandler} onBlur={()=>console.log('focus lost')}>William</textarea>
            <input type="text" tabIndex={2} onFocus={onFocusInputHandler}/>
            <button onClick={addUser}>Add</button>
            <button name='delete' onClick={deleteUser}>Delete</button>
        </div>
    )
}