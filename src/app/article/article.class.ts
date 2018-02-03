
interface ArticleMetaData {
  id: Number;
  title: String;
  author: String;
  description: String;
  location: String;
  neighborhood: String;
  mapPreviewUrl: String;
}

interface Coordinates {
  north: Number;
  south: Number;
  east: Number;
  west: Number;
}

export class Article {
  id: number;
  content: string;
  meta: ArticleMetaData;
  coordinates: Coordinates;

  inProgress: boolean;
}
