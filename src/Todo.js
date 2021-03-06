import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';

const todo = (props) => {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemText  primary={props.context} secondary="Deadline" />
            </ListItem>
            
        </List>
      
    );
}

export default todo;