import React from 'react';
import { TextField } from '@mui/material';
import './../App.css';
import './../static/fonts/fonts.css';

const Input: React.FC = () => {
    return (
        <TextField 
            fullWidth
            multiline
            minRows={1}
            maxRows={5}
            variant="filled"
            defaultValue="Paste or enter text here: "
            color="secondary"
            sx={{
                backgroundColor: 'rgb(10,0,10,0.5)',
                width: '80%',
                '& textarea': {
                    paddingTop: '0.0000001%',
                    paddingBottom: '1.75%',
                    color: 'white',
                }
            }}
        />
    )
}

export default Input;