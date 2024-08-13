import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";

const TodoDate = () => {
    const [date, setDate] = useState('')

    useEffect(() => {
        const interval = setInterval(()=>{
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            setDate(`${formatedDate} - ${formatedTime}`)
        },1000);

        return ()=>clearInterval(interval);
    }, []);
    return (
        <Typography variant={'h6'}>{date}</Typography>
    );
};

export default TodoDate;