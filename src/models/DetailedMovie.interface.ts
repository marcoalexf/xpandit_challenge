import { IDetailedMovie } from "./IDetailedMovie.interface";
import { IMovie } from "./IMovie.interface";
import { Movie } from "./Movie";

export class DetailedMovie extends Movie implements IDetailedMovie {
    private _genre: string;
    private _description: string;
    private _director: string;
    private _actors: string;
    private _runtime: number;
    private _rating: number;
    private _votes: number;
    private _metascore: number;


    /**
     * Getter genre
     * @return {string}
     */
	public get genre(): string {
		return this._genre;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter director
     * @return {string}
     */
	public get director(): string {
		return this._director;
	}

    /**
     * Getter actors
     * @return {string}
     */
	public get actors(): string {
		return this._actors;
	}

    /**
     * Getter runtime
     * @return {number}
     */
	public get runtime(): number {
		return this._runtime;
	}

    /**
     * Getter rating
     * @return {number}
     */
	public get rating(): number {
		return this._rating;
	}

    /**
     * Getter votes
     * @return {number}
     */
	public get votes(): number {
		return this._votes;
	}

    /**
     * Getter metascore
     * @return {number}
     */
	public get metascore(): number {
		return this._metascore;
	}

    /**
     * Setter genre
     * @param {string} value
     */
	public set genre(value: string) {
		this._genre = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter director
     * @param {string} value
     */
	public set director(value: string) {
		this._director = value;
	}

    /**
     * Setter actors
     * @param {string} value
     */
	public set actors(value: string) {
		this._actors = value;
	}

    /**
     * Setter runtime
     * @param {number} value
     */
	public set runtime(value: number) {
		this._runtime = value;
	}

    /**
     * Setter rating
     * @param {number} value
     */
	public set rating(value: number) {
		this._rating = value;
	}

    /**
     * Setter votes
     * @param {number} value
     */
	public set votes(value: number) {
		this._votes = value;
	}

    /**
     * Setter metascore
     * @param {number} value
     */
	public set metascore(value: number) {
		this._metascore = value;
	}

    constructor(data: IDetailedMovie) {
        super(data);
        this._genre = data.genre;
        this._description = data.description;
        this._director = data.director;
        this._actors = data.actors;
        this._runtime = data.runtime;
        this._rating = data.rating;
        this._votes = data.votes;
        this._metascore = data.metascore;
    }
    
}