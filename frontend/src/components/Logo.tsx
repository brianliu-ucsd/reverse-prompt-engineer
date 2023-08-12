import React from "react";
import { Typography } from "@mui/material";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

const Logo: React.FC = () => {
    return(
        <div 
            style={{ 
                display: 'grid', 
                gridTemplateColumns: 'auto auto',
                justifyContent: 'center',
                alignItems: 'center',
                gridGap: '8px',
            }}
        >
            <Typography variant="h6" 
                sx={{ 
                    color: '#0fb696', 
                    fontFamily: 'Avenir', 
                    letterSpacing: '.2rem',
                    fontSize: '1.75rem', 
                    ml: '2%',
                }}>
                ReverseGPT
            </Typography>
            <SettingsBackupRestoreIcon sx={{ ml: '0.5rem' }}></SettingsBackupRestoreIcon>
        </div>
    )
}

export default Logo;