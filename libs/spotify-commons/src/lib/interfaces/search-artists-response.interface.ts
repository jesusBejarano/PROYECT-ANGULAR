import { Artist } from './album-response.interface';

export interface SearchArtistsResponse {
  artists: {
    items: Artist[]
  };
}
