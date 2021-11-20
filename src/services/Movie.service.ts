import axios from "axios"
import { IPageable } from "../models/IPageable.interface";
import { IPageMovie } from "../models/IPageMovie.interface";
import { IPagination } from "../models/IPagination.interface";

const client = axios.create({
    baseURL: 'http://movie-challenge-api-xpand.azurewebsites.net/api',
});

export const getMovies = async (page?: IPagination) => {
    return await client.get<IPageMovie>('/movies', {
        params: {
            ...page
        }
    });
}