import { Hero } from './hero';

export interface HeroResponse {
    status: string;
    message: string;
    count: number;
    data: Hero[];
}
