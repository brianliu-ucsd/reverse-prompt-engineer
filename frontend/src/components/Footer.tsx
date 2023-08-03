import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './../App.css';

const Footer: React.FC = () => {
    return (
        <AppBar 
            position="absolute" 
            sx={{ 
                width: '100%', 
                backgroundColor: 'rgb(10,0,10,0.75)', 
                top: 'auto',
                bottom: '0',
            }}
        >
            <Toolbar disableGutters>
                <SettingsBackupRestoreIcon sx={{ ml: '3%', mr: '1%' }} /> 
                <Typography variant="h6" sx={{ color: 'offwhite' }}>
                    Reverse Prompt Engineer
                </Typography>
                <Grid container justifyContent="flex-end" alignItems="center" spacing={1} marginRight={'3%'}>
                    <Grid item>
                        <Typography variant="body1" sx={{ color: 'white', marginRight: '1rem' }}>
                            Created by Brian Liu
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link href="https://github.com/brianliu-ucsd" color="inherit">
                            <GitHubIcon />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.linkedin.com/in/brian-liu-ucsd" color="inherit">
                            <LinkedInIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;