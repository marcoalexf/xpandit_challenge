import { IMovie } from "./IMovie.interface";

export class Movie implements IMovie {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    private _year: number;
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        this._year = value;
    }

    private _rank: number;
    public get rank(): number {
        return this._rank;
    }
    public set rank(value: number) {
        this._rank = value;
    }
    
    private _revenue: number;
    public get revenue(): number {
        return this._revenue;
    }
    public set revenue(value: number) {
        this._revenue = value;
    }

    constructor(data: IMovie) {
        this._id = data.id;
        this._rank = data.rank;
        this._revenue = data.revenue;
        this._title = data.title;
        this._year = data.year;
    }

}