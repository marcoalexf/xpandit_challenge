import { IMovie } from "./IMovie.interface";

export interface IDetailedMovie extends IMovie {
    genre: string;
    description: string;
    director: string;
    actors: string;
    runtime: number;
    rating: number;
    votes: number;
    metascore: number;
}