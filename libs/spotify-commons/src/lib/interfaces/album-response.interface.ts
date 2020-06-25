export interface Image {
  url: string;
}

export interface ArtistResponse {
  external_urls: {
    spotify: string;
  };
  id: string;
  name: string;
  images: Image[];
}

export interface Artist {
  external_urls: {
    spotify: string;
  };
  id: string;
  name: string;
  images: Image[];

}




export interface Album {
  artists: Artist[];
  images: Image[];
  name: string;
}
