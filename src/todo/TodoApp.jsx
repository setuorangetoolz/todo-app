import React, {useEffect, useState} from 'react';
import {Box, Button, IconButton, List, ListItem, ListItemText, Stack, TextField, Typography} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";
import TodoForm from "./TodoForm";
import TodoDate from "./TodoDate";
import {getTodoListData, setTodoListData} from "./TodoLocalStorageData";

const TodoApp = () => {
    const [list, setList] = useState(()=>getTodoListData())

setTodoListData(list);
    const handleSubmit = (value) => {
        const {id, content, checked} = value;
        if (!content) return;
        const isMatchContent = list.find((curr) => curr.content === content)
        if (isMatchContent) return;
        setList((prev) => [...prev, {id, content, checked}])
    }
    const handleClearAll = (event) => {
        setList([])
    }
    const handleDelete = (item) => {
        const updatedList = list.filter((currElm) => currElm.content !== item.content)
        setList(updatedList)
    }
    const handleCheck = (item) => {
        const updatedList = list.map((currElm) => {
            if (currElm.content === item.content) {
                return {...currElm, checked: !currElm.checked}
            } else {
                return currElm;
            }
        })
        setList(updatedList)
    }

    return (
        <Stack alignItems={'center'} width={'100vw'} height={'100vh'} >
            <Box>
                <Typography variant={'h4'} my={8}>To do List app</Typography>
                <TodoDate/>
                <TodoForm onAddList={handleSubmit}/>
                <List dense>
                    {list?.map((item, index) => (
                        <ListItem key={item.id} x secondaryAction={<Stack direction={'row'}
                                                                          gap={1}>
                            <IconButton onClick={() => handleCheck(item)}><Check/></IconButton>
                            <IconButton onClick={() => handleDelete(item)}><Delete/></IconButton>
                        </Stack>}>
                            <ListItemText primary={item.content}
                                          sx={{textDecoration: item.checked ? 'line-through' : 'initial'}}/>
                        </ListItem>
                    ))}
                </List>
                <Button variant={'outlined'} onClick={handleClearAll}>clear all</Button>
            </Box>
        </Stack>
    );
};

export default TodoApp;