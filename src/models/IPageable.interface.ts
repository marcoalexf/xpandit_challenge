import { ISort } from "./ISort.interface";

export interface IPageable {
    sort: ISort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}