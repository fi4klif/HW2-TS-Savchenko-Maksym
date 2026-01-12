export interface PixabayImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  // додай інші поля, які є в галереї
}

export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
}