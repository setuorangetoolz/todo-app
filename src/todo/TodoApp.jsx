import React from 'react';
import {Box, Button, IconButton, List, ListItem, ListItemText, Stack, Typography} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";
import TodoForm from "./TodoForm";
import TodoDate from "./TodoDate";
import useCreateStore from "../app/listStore";

const TodoApp = () => {
    const {lists,removeLisItem,toggleListItemState,clearAllLists} = useCreateStore(
        (state)=>({
            lists: state.lists,
            removeLisItem:state.removeLisItem,
            toggleListItemState: state.toggleListItemState,
            clearAllLists:state.clearAllLists
        })
    );


    return (
        <Stack alignItems={'center'} width={'100vw'} height={'100vh'} >
            <Box>
                <Typography variant={'h4'} my={8}>To do List app</Typography>
                <TodoDate/>
                <TodoForm />
                <List dense>
                    {lists?.map((item) => (
                        <ListItem key={item.id} x secondaryAction={<Stack direction={'row'}
                                                                          gap={1}>
                            <IconButton onClick={() => toggleListItemState(item.id)}><Check/></IconButton>
                            <IconButton onClick={() => removeLisItem(item.id)}><Delete/></IconButton>
                        </Stack>}>
                            <ListItemText primary={item?.content}
                                          sx={{textDecoration: item?.checked ? 'line-through' : 'initial'}}/>
                        </ListItem>
                    ))}
                </List>
                <Button variant={'outlined'} onClick={clearAllLists}>clear all</Button>
            </Box>
        </Stack>
    );
};

export default TodoApp;