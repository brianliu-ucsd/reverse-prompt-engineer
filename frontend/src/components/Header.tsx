import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

const Header: React.FC = () => {
    return (
        <AppBar position="absolute" sx={{ width: '100%', ml: '0', mr: '0' }}>
            <Toolbar disableGutters>
                <SettingsBackupRestoreIcon sx={{ ml: '5%', mr: '1%' }} />
                <Typography variant="h6">
                    Reverse Prompt Engineer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;