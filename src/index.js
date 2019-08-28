import React from 'react'
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './styles.css'
import { Typography, AppBar, Toolbar, Box } from '@material-ui/core';
import { useState } from 'react' //we need a state for out todo items. 


const App = () => {
    const [todo, setTodo] = useState([]) //This initial state should start as an empty array
    return (
        <div className="App"> {/*Grabbing CSS attributes*/}
            <AppBar color="Secondary" position="static">
                <Toolbar style={{ height: 60 }}>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            <Box fontSize={30}>
                                Nick's To Do List
                            </Box>
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>

            <TodoForm
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();

                    if (trimmedText.length > 0) {
                        setTodo([...todo, trimmedText]);
                    }
                }}
            />
            <TodoList todo={todo}
                deleteTodo={(todoIndex) => {
                    const newToDos = todo.filter((_, index) => index !== todoIndex)
                    setTodo(newToDos)
                }}
            />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);