import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
            <CircularProgress color="secondary" />
        </Box>
    );
}