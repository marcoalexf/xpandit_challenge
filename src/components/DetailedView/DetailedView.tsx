import { Close } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { IDetailedMovie } from '../../models/IDetailedMovie.interface'
import { FC } from '../../types/FC'
import { DetailScreenField } from '../DetailScreenField'

interface DetailedViewProps {
    movie: IDetailedMovie | undefined;
}

export const DetailedView: FC<DetailedViewProps> = ({ movie }) => {
    return (
        <>
            {
                movie ?  
                <Box display="flex" flexDirection="column">
                    <DetailScreenField color="#78849E" label="Year" text={movie.year} />
                    <DetailScreenField color="#78849E" label="Genre" text={movie.genre} />
                    <DetailScreenField color="#78849E" label="Description" text={movie.description} />
                    <Box display="flex">
                        <DetailScreenField color="#00BAFF" label="Director" text={movie.director} />
                        <DetailScreenField color="#00BAFF" label="Actors" text={movie.actors} />
                    </Box>
                    <DetailScreenField color="#78849E" label="Runtime" text={movie.runtime} />
                    <DetailScreenField color="#78849E" label="Rating" text={movie.rating} />
                    <DetailScreenField color="#78849E" label="Votes" text={movie.votes} />
                    <DetailScreenField color="#78849E" label="Revenue" text={movie.revenue} />
                    <DetailScreenField color="#78849E" label="Metascore" text={movie.metascore} />
                </Box>
                :
                <Box>Loading..</Box>
            }
        </>
    )
}
