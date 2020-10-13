import { Artist } from 'src/app/interfaces/artist';

/**
 * Represents a user structure.
 */
export interface User {
  name: string;
  /**
   * List of favorite artists.
   */
  likes: Artist[];
}
