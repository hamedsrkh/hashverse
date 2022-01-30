import React from 'react';
import {AggregateResult} from "../Types/types";
import {Card, CardContent, Typography} from "@mui/material";
import styled from "styled-components";

interface PropsType{
    item: AggregateResult
}

const Bold = styled.span`
    font-weight: bold;
`

const CryptoDetailCard : (props : PropsType) => JSX.Element = ({item}) => {
    return (
            <Card sx={{display: 'block', width:'100%', margin:'10px 0'}}>
                <CardContent>
                    <Typography component="div">
                        <Bold>open price:</Bold> {item.o}
                    </Typography>
                    <Typography component="div">
                        <Bold>close price:</Bold> {item.c}
                    </Typography>
                    <Typography component="div">
                        <Bold>highest price:</Bold> {item.h}
                    </Typography>
                    <Typography component="div">
                        <Bold>lowest price:</Bold> {item.l}
                    </Typography>

                    <Typography component="div">
                        <Bold>number of transactions:</Bold> {item.t}
                    </Typography>

                    <Typography component="div">
                        <Bold>trading volume:</Bold> {item.v}
                    </Typography>

                    <Typography component="div">
                        <Bold>volume weighted average price:</Bold> {item.vw}
                    </Typography>
                </CardContent>

            </Card>
    );
};

export default CryptoDetailCard;
