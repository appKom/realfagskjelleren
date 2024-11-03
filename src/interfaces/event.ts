import type Media from "./media";

export default interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    coverImage: Media;
}