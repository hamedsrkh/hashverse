import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import styled from "styled-components";

const color = deepPurple['A200'];

const Nav = styled(AppBar)`
 background-color: ${color};
`

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Nav position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hashverse
                    </Typography>
                </Toolbar>
            </Nav>
        </Box>
    );
}
