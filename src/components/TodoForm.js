//This script will ensure to add functionality to our state
//Throughout the project we will be using hooks which dictate our current state 

import React, { useState } from 'react' //This is our first hook. It will take the inital state and return an array
import { TextField } from '@material-ui/core'

const TodoForm = ({ saveTodo }) => //arrow expression = compact alternative to a regular function expression ----- =() {} ---- 
//which is used to define a function inside an expression 
{
    const [value, setValue] = useState('') //Returns a stateful value, and a function to update it.
    // our first array's index will be the state's current value 
    return (
        <form
            onSubmit={event => 
            {
                event.preventDefault() //this will prevent the user from submitting an item without meeting the recquirements 
                saveTodo(value) //this will save the value we submit 
                setValue('') //this will reset the textfield so the user won't see what they were previously writting 
            }}
        >
            <TextField variant="outlined" placeholder="Add an item" // This will add placeholder text so the user knows
                inputProps={{ style: { textAlign: 'center', width: 1395, } }}
                // where to instert their text
                onChange={event => 
                {
                    setValue(event.target.value) //this will set text in the textfield
                }}
                value={value}
            />
        </form>
    );
}

export default TodoForm;
