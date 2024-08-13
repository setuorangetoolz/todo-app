import React, {useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";

const TodoForm = ({onAddList}) => {
    const [inputValue, setInputValue] = useState({})

    const handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked: false})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onAddList(inputValue)
        setInputValue({id:'',content:'',checked:false})
    }

    return (
        <Box component={'form'} onSubmit={handleSubmit}>
            <Stack direction={"row"}>
                <TextField value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)}/>
                <Button variant={'contained'} type={"submit"}>Add</Button>
            </Stack>
        </Box>
    );
};

export default TodoForm;