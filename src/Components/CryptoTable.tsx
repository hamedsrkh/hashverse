import * as React from 'react';
import {DataGrid, GridColDef, GridRowParams, GridRowsProp} from '@mui/x-data-grid';
import { Crypto } from "../Types/types"


interface PropsType{
    items: Crypto[]
}


export default function CryptoTable({items} : PropsType) {
    const columns: GridColDef[] = [
        { field: 'T', headerName: 'symbol', flex:1 },
        { field: 'v', headerName: 'volume', flex:1 },
        { field: 'o', headerName: 'open price', flex:1 },
        { field: 'c', headerName: 'close price', flex:1 },
        { field: 'h', headerName: 'highest price', flex:1 },
        { field: 'l', headerName: 'lowest price', flex:1 },
    ];
    const rows: GridRowsProp = items.map((item,index)=>{
        return {
            ...item,
            id: index,
            T: item.T.substring(2),
        }
    })

    const fetchDetails = ({row} : GridRowParams) =>{
        console.log(row)
    }

    return (
        <>
            <div style={{ marginTop:'20px',width: '100%', height:'600px' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid rows={rows} columns={columns} sortModel={[{ field: 'v', sort: 'desc' }]} onRowClick={fetchDetails}/>
                    </div>
                </div>
            </div>
        </>

    );
}
