import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FC } from '../types/FC'

interface DetailScreenFieldProps {
    label: string;
    text: string | number;
}

export const DetailScreenField: FC<DetailScreenFieldProps> = ({
    label,
    text,
    ...props
}) => {
    return (
        <Box display="flex" flexDirection="column">
            <Typography fontSize="17px" color="#78849EB9">{label || '-'}</Typography>
            <Typography {...props} fontSize="19px">{text || '-'}</Typography>
        </Box>
    )
}
