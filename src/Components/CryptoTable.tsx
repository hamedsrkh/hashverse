
import {DataGrid, GridColDef, GridRowParams, GridRowsProp} from '@mui/x-data-grid';
import {Crypto} from "../Types/types"
import {Modal} from './Modal';
import {useMemo, useState} from "react";


interface PropsType {
    items: Crypto[]
}
const columns: GridColDef[] = [
    {field: 'T', headerName: 'symbol', flex: 1},
    {field: 'v', headerName: 'volume', flex: 1},
    {field: 'o', headerName: 'open price', flex: 1},
    {field: 'c', headerName: 'close price', flex: 1},
    {field: 'h', headerName: 'highest price', flex: 1},
    {field: 'l', headerName: 'lowest price', flex: 1},
];

export default function CryptoTable({items}: PropsType) {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);

    const rows: GridRowsProp = useMemo(() => {
        return items.map((item, index) => {
            return {
                ...item,
                id: index,
                T: item.T.substring(2),
            }
        })
    }, [items]);


    const showDetails = ({row}: GridRowParams) => {
        setModalOpen(true)
        setSelectedCrypto(row as Crypto)
    }

    return (
        <>
            <Modal crypto={selectedCrypto} open={modalOpen} closeModal={() => {
                setModalOpen(false)
            }}/>
            <div style={{marginTop: '20px', width: '100%', height: '600px'}}>
                <div style={{display: 'flex', height: '100%'}}>
                    <div style={{flexGrow: 1}}>
                        <DataGrid rows={rows} columns={columns} sortModel={[{field: 'v', sort: 'desc'}]}
                                  onRowClick={showDetails}/>
                    </div>
                </div>
            </div>
        </>

    );
}
