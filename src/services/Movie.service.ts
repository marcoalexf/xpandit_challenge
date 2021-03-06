import axios from "axios";
import { IDetailedMovie } from "../models/IDetailedMovie.interface";
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

export const getDetailedMovie = async (id: string) => {
    return await client.get<IDetailedMovie>(`/movies/${id}`);
}

export const getMoviesFromYear = async (start: string) => {
    return await client.get<IPageMovie>(`/movies`, {
        params: {
            start
        }
    });
}

export const getMoviesTopTen = async (year: string) => {
    return await client.get<IPageMovie>(`/movies`, {
        params: {
            size: '10',
            start: year
        }
    });
}