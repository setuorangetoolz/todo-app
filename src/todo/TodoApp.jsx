import React, {useState} from 'react';
import {Box, Button, IconButton, List, ListItem, ListItemText, Stack, TextField, Typography} from "@mui/material";
import {Check, Delete, Edit} from "@mui/icons-material";
import TodoForm from "./TodoForm";
import TodoDate from "./TodoDate";
import useCreateStore from "../app/listStore";
import BasicModal from "./BasicModal";

const TodoApp = () => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [editedInput, setEditedInput] = useState('');
    const {lists, removeLisItem, toggleListItemState, clearAllLists,updateListItem} = useCreateStore(
        (state) => ({
            lists: state.lists,
            removeLisItem: state.removeLisItem,
            toggleListItemState: state.toggleListItemState,
            clearAllLists: state.clearAllLists,
            updateListItem:state.updateListItem
        })
    );

    const handleEditClick = (item) =>{
        setCurrentItem(item)
        setEditedInput(item.content)
        setOpenEditModal(true)
    }

    const handleUpdateLst = () =>{
        if(currentItem){
            updateListItem(currentItem.id,editedInput)
            setOpenEditModal(false)
        }
    }

    return (
        <Stack alignItems={'center'} width={'100vw'} height={'100vh'}>
            <Box>
                <Typography variant={'h4'} my={8}>To do List app</Typography>
                <TodoDate/>
                <TodoForm/>
                <List dense>
                    {lists?.map((item) => (
                        <ListItem key={item.id} x secondaryAction={<Stack direction={'row'}
                                                                          gap={1}>
                            <IconButton onClick={() => handleEditClick(item)}><Edit/></IconButton>
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

            <BasicModal width={380} open={openEditModal} onClose={() => setOpenEditModal(false)}>
                <Stack direction={'row'} p={3}>
                    <TextField type={'text'} value={editedInput} onChange={(event) => setEditedInput(event.target.value)}/>
                    <Button variant={"contained"} onClick={handleUpdateLst}>Update</Button>
                </Stack>
            </BasicModal>
        </Stack>
    );
};

export default TodoApp;