import React from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ForgotPassword = () => {
    return (
        <div className="container" alignItems="center"
        justify="center" style={{ minHeight: '100vh' }}>
            <Box
                sx={{
                    width: 500,
                    maxWidth: "100%",
                }}
            >
                <Stack direction="column" spacing={2}>
                    <h1>Revover Password</h1>
                    <TextField fullWidth label="Email" id="email" />
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </Box>
        </div>
    );
};
