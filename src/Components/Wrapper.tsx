import React, {PropsWithChildren} from 'react';
import AppBar from "./AppBar";
import {Container} from "@mui/material";

const Wrapper : (props: PropsWithChildren<any>) => JSX.Element  = (props) => {
    return (
        <>
            <AppBar/>
            <Container>
                {props.children}
            </Container>
        </>
    );
};

export default Wrapper;
