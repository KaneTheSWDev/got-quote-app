export interface Character {
  slug?: string;
  name?: string;
  house?: {
    slug: string;
    name: string;
  };
  quotes?: string[];
}
