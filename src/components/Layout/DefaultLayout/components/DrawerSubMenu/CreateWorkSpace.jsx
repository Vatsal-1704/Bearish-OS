import { Box, Stack } from '@mui/material'
import React from 'react'

const CreateWorkSpace = () => {
    return (
        <Box>
            <Stack sx={{ padding: "16px" }}>
                <input type='text' placeholder='Name your Workspace' style={{ padding: "12px", fontSize: "15px" }} />
                <Stack sx={{
                    backgroundColor: '#5ee2a042',
                    justifyContent: 'center',
                    height: '30px',
                    width: '85px',
                    alignItems: 'center',
                    borderRadius: '10px',
                    marginLeft: "auto",
                    marginTop: "10px"
                }}>
                    Create
                </Stack>
            </Stack>
        </Box>
    )
};

export default CreateWorkSpace
