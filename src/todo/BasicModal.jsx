import React from 'react';
import {Backdrop, Grow, Modal, Paper, Stack, styled} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Close} from '@mui/icons-material';

const PaperStyle = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    overflow: 'hidden',
    pointerEvents: 'all',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '90vw !important',
    },
}));

const BasicModal = ({
    open,
    onClose,
    width = 500,
    maxWidth,
    maxHeight = '80vh',
    disableOutSideClick = false,
    children,
    showCloseIcon = true,
    disablePadding = false,
    iconTop = '16px',
    iconRight = '16px',
    ...rest
}) => {
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={!disableOutSideClick ? onClose : () => false}
                BackdropComponent={Backdrop}
                slotProps={{
                    backdrop: {
                        timeout: 300,
                    },
                }}
                {...rest}
            >
                <Grow in={open}>
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ height: '100%', pointerEvents: 'none' }}>
                        <PaperStyle sx={{ minWidth: 150, width: width, maxWidth: maxWidth, padding: disablePadding ? 0 : 3 }}>
                            {showCloseIcon && (
                                <IconButton
                                    color='error'
                                    onClick={onClose}
                                    sx={{ position: 'absolute', top: iconTop, right: iconRight, zIndex: 9 }}
                                >
                                    <Close />
                                </IconButton>
                            )}

                            <Box sx={{ maxHeight: maxHeight, overflowY: 'auto' }}>{children}</Box>
                        </PaperStyle>
                    </Stack>
                </Grow>
            </Modal>
        </React.Fragment>
    );
};

export default BasicModal;
