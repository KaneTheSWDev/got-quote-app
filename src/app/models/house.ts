import { Character } from './character';

export interface House {
  slug: string;
  name: string;
  members: Character[];
}
