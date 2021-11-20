import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { IMovie } from '../../models/IMovie.interface';
import { ListHeader } from '../ListHeader/ListHeader';
import { ListItem } from '../ListItem/ListItem'

interface InfiniteScrollProps {
    dataLength: number;
    next: any;
    items: IMovie[];
    onContainerHeightSet: (height: number) => void
}

export const MovieList: React.FC<InfiniteScrollProps> = ({dataLength, next, items, onContainerHeightSet}) => {

    const [totalElements, setTotalElements] = useState(100);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        if (containerRef) {
            setContainerHeight(containerRef.current!.clientHeight - 1);
            onContainerHeightSet(containerRef.current!.clientHeight - 1)
        }
    }, [containerRef]);

    useEffect(() => {
        setTotalElements(dataLength || 100);
    }, [dataLength])
    return (
        <Box height="100%" ref={containerRef} display="flex" flexDirection="column">
             <ListHeader titleText="Title" positionText="Ranking" revenueText="Revenue" yearText="Year" />
            {
                containerRef && 
                <InfiniteScroll
                dataLength={totalElements}
                next={next}
                hasMore={true}
                loader={<p>Loading more data..</p>}
                >
                    {items.map((el, index) => {
                        return (
                            <ListItem key={index}
                            title={el.title}
                            position={el.rank}
                            revenue={el.revenue}
                            year={el.year}
                            />
                        )
                    })}
                </InfiniteScroll>
            }
        </Box>
    )
}
