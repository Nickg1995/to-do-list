import React from 'react'
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles.css'
import { Typography, AppBar, Toolbar, Box } from '@material-ui/core';
import { useState } from 'react' //we need a state for out todo items. 


const App = () => 
{
    const [todo, setTodo] = useState([]) //This initial state should start as an empty array
    return (
        <div className="App"> {/*Grabbing CSS attributes*/}
            <AppBar color="Secondary" position="static">
                <Toolbar style={{ height: 60 }}> {/* controls the height of the bar at the top of the page */}
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>{/* controls the boldness of the text */}
                            <Box fontSize={30}> {/* controls the size of the text */}
                                Nick's To Do List
                            </Box>
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>

            <TodoForm
                saveTodo={todoText => 
                {
                    const trimmedText = todoText.trim();

                    if (trimmedText.length > 0) 
                    {
                        setTodo([...todo, trimmedText]);
                    }
                }}
            />
            <TodoList todo={todo}
                deleteTodo={(todoIndex) => 
                {
                    const newToDo = todo.filter((_, index) => index !== todoIndex) //if our items don't match the index item stored in setTodo list then delete it
                    setTodo(newToDo) //reset to new value
                }}
            />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);