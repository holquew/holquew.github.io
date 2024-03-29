import React from 'react'
import {
    Box,
    Link,
    Typography,

} from '@material-ui/core';
const Footer = () => {
    return (
        <Box sx={{ p: 3, textAlign: 'center', position: 'sticky', bottom: 0, left: 0 }}>
            <Typography>© 2021 All rights reserved by <Link href="https://www.wrappixel.com">Wrappixel.com</Link> </Typography>
        </Box>
    );
}

export default Footer;