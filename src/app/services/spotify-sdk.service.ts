import { Injectable } from '@angular/core';
import { SONGS } from 'src/app/utils/songs';
import { Artist } from 'src/app/interfaces/artist';
import { Song } from 'src/app/interfaces/song';

/**
 * A fake Spotify SDK service that generates list of songs based on the user's favorite artists.
 */
@Injectable({
  providedIn: 'root',
})
export class SpotifySdkService {

  constructor() {
  }

  /**
   * Get the user's favorite songs based on given artists.
   *
   * @param artists Artists to get songs from.
   */
  static getUserFavorites(artists: Artist[]): Song[] {
    /**
     * Populate list of artist IDs.
     */
    const idList: number[] = artists.map((artist: Artist): number => artist.id);
    /**
     * Get songs based on artist IDs.
     */
    return SONGS.filter((song: Song): boolean => idList.includes(song.artist));
  }
}
