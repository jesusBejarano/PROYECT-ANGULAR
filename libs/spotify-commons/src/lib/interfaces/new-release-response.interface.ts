import { Album } from './album-response.interface';

export interface NewReleaseResponse {
    albums: {
        items: Album[]
    };
}
