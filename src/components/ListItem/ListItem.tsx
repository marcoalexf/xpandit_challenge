import { Divider, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface ListItemProps {
    title: string;
    year: number;
    revenue: number;
    position: number;
}

export const ListItem: React.FC<ListItemProps> = ({
    position,
    revenue,
    title,
    year,
}) => {
    const [visible, setVisible] = useState(true);

    return (
        <Box display="flex" flexDirection="row" color="#536B7A" fontSize="16px" p={2}>
            <Typography flex="0 0 10%">{position}</Typography>
            <Typography flex="1 0 auto">{title}</Typography>
            <Typography flex="0 0 10%">{year}</Typography>
            <Typography flex="0 0 10%">{revenue}</Typography>
            <IconButton onClick={() => setVisible(state => !state)}>
                {visible ? <VisibilityOff /> : <VisibilityIcon />}
            </IconButton>
            <Divider color="grey" />
        </Box>
    )
}
