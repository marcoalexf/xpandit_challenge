import { Divider, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface ListHeaderProps {
    titleText: string;
    yearText: string;
    revenueText: string;
    positionText: string;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
    positionText,
    revenueText,
    titleText,
    yearText,
}) => {
    const [visible, setVisible] = useState(true);

    return (
        <Box display="flex" flexDirection="column" mb={1}>
            <Box display="flex" flexDirection="row" p={2} pb={1} fontWeight="bolder" fontSize="10px" fontFamily="Roboto, sans-serif">
                <Box color="#0B749B" flex="0 0 10%" height="fit-content">{positionText.toUpperCase()}</Box>
                <Box color="#0B749B" flex="1 0 auto" height="fit-content">{titleText.toUpperCase()}</Box>
                <Box color="#0B749B" flex="0 0 10%" height="fit-content">{yearText.toUpperCase()}</Box>
                <Box color="#0B749B" flex="0 0 10%" height="fit-content">{revenueText.toUpperCase()}</Box>
                <IconButton style={{
                    height: '12px'
                }}>
                    <VisibilityOff style={{
                        visibility: 'hidden'
                    }} />
                </IconButton>
            </Box>
            <Divider color="#0B749B" />
        </Box>
    )
}
