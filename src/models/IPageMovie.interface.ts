import { IMovie } from "./IMovie.interface"
import { IPageable } from "./IPageable.interface"
import { ISort } from "./ISort.interface"

export interface IPageMovie {
    totalElements: number;
    totalPages: number;
    sort: ISort;
    size: number;
    content: IMovie[];
    number: number;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: IPageable;
    empty: number;
}