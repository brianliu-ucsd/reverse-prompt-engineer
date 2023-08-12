import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@mui/material';
import Logo from './Logo';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './../App.css';
import './../static/fonts/fonts.css';

const Footer: React.FC = () => {
    return (
        <div>
            <AppBar 
                position="absolute" 
                sx={{ 
                    width: '100%', 
                    backgroundColor: 'rgb(10,0,10,0.9)', 
                    top: 'auto',
                    bottom: '0',
                    paddingLeft: '2%',
                    paddingRight: '2%'
                }}
            >
                <Toolbar disableGutters>
                    <Logo/>
                    <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography variant="body1" sx={{ color: 'white', marginRight: '0.75rem' }}>
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
        </div>
    )
}

export default Footer;