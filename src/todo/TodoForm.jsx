import React, {useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import useCreateStore from "../app/listStore";

const TodoForm = () => {
    const addListItem = useCreateStore((state)=>state.addListItem)
    const [inputValue, setInputValue] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!inputValue) return;
        addListItem({
            id: Math.ceil(Math.random() * 1000000),
            content: inputValue,
            checked:false
        })
        setInputValue('')
    }

    return (
        <Box component={'form'} onSubmit={handleSubmit}>
            <Stack direction={"row"}>
                <TextField value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
                <Button variant={'contained'} type={"submit"}>Add</Button>
            </Stack>
        </Box>
    );
};

export default TodoForm;