import { Component } from '@angular/core';
import { ARTISTS } from 'src/app/utils/artists';
import { Artist } from 'src/app/interfaces/artist';
import { Song } from 'src/app/interfaces/song';
import { User } from 'src/app/interfaces/user';
import { SpotifySdkService } from 'src/app/services/spotify-sdk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   * List of names to generate.
   */
  private names: string[] = ['Jason', 'Brad', 'Mark', 'Rick', 'Ben', 'Morty', 'Felix', 'Max'];

  /**
   * List of users in the cafe.
   */
  users: User[] = [];

  /**
   * Playlist songs.
   */
  songs: Song[] = [];

  /**
   * Add new user. In other words,
   * a new user just walked into the cafe and has been connected to the Wi-Fi network.
   */
  addUser(): void {
    /**
     * Generate a random user with random favorite artists.
     */
    const randomName: string = this.names[Math.floor(Math.random() * this.names.length)];
    const randomArtist: Artist[] = ARTISTS.sort((): number => Math.random() - Math.random()).slice(0, 2);
    const user: User = {
      name: randomName,
      likes: randomArtist,
    };
    this.users.push(user);
    /**
     * Get the user's favorite songs based on his/her favorite artists.
     */
    const favorites: Song[] = SpotifySdkService.getUserFavorites(user.likes);
    /**
     * Check to see if we have duplicated artists.
     */
    const final: Song[] = favorites.filter((favorite: Song): boolean => {
      return !this.songs.some((song: Song): boolean => song.artist === favorite.artist);
    });
    this.songs = this.songs.concat(final);
  }
}
