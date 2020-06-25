import { Album } from './album-response.interface';

export interface Track {
    album: Album;
    name: string;
    preview_url: string;
    uri: string;
}
