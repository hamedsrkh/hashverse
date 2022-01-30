import React from 'react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

 interface PropsTypes {
     close: () => void
 }
const CloseButton = ({close} : PropsTypes ) => {
    return (
        <IconButton
            aria-label="close"
            onClick={close}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
        >
            <CloseIcon/>
        </IconButton>
    );
};

export default CloseButton;
