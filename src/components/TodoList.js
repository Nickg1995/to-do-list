import React from 'react'
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const TodoList = ({ todo, deleteTodo }) => (
    <List>
        {todo.map((todo, index) => ( //using a map to map over our items create a list item where we can grab its index point with in the array
            <ListItem key={index.toString()} dense button> {/*//using a ListItem to display each item within the list*/}
                {/*//Dense button will allow the item to highlight as the cursor goes over it */}
                <Checkbox /> {/*include a check box to select items we want to delete */}
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton //We can grab an icon button to allow the user to visually remove an item from the list
                        aria-label="Delete"
                        onClick={() => { //when the user clicks the icon 
                            deleteTodo(index) //we want to grab the element index in the array and remove that
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
)

export default TodoList;