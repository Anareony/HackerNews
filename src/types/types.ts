export interface IComment {
    by: string;
    text: string;
    time: number;
    dead: boolean;
    deleted: boolean;
    kids: number[];
}

export interface IStory {
    id: string;
    by: string;
    title: string;
    time: number;
    score: number;
    text: string;
    dead: boolean;
    deleted: boolean;
    kids: number[];
    url: string;
    descendants: number;
}