import { Component, OnInit } from '@angular/core';
import { SongsServicesService } from '../Services/songs-services.service';
import { Song } from '../song/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  //se declara la variable songs que es de tipo array de Song (Song[])
  songs: Song[];

  filteredSongs: Song[] = [];

  textSong: string = '';

  artists:string[];

  generes:string[];

  artistSelected :string = '';

  genereSelected :string = '';

  songSelected : Song;

  constructor( private songsServicesService : SongsServicesService) {

    this.songs =[];
    this.artists=[];
    this.generes=[];
    this.songSelected = new Song();
  }

  ngOnInit(): void {
    /**
     * Llamamos al servicio
     */
    let allGenres: string [] = []
    this.songsServicesService.getJSON().subscribe(data => {
        this.songs = data.songsList;
        this.filteredSongs = this.songs;
        this.songs.forEach(song => {
          this.artists.push(song.artist);

          song.genres.forEach(genre => {
            allGenres.push(genre);
          });

        });

        // Eliminamos los elementos duplicados del array de géneros
        this.generes = [ ...new Set(allGenres) ];

    this.generes = ["All"].concat(this.generes);
    });


    this.artists = Array.from(new Set(this.artists));
    this.generes = Array.from(new Set(this.generes));

    this.artists = ["All"].concat(this.artists);
  }

  setSong(song:Song){

    this.songSelected = song;
  }

  filterBy(){
    if(this.artistSelected === '' && this.genereSelected === '' ){
      return this.filteredSongs = this.songs
    }
    else if (this.artistSelected === 'All' && this.genereSelected === '' ){
      return this.filteredSongs = this.songs
    }
    else if (this.artistSelected === '' && this.genereSelected === 'All' ){
      return this.filteredSongs = this.songs
    }
    else if(this.artistSelected === '' && this.genereSelected !== ''){
      return this.filteredSongs = this.songs.filter(song => song.genres.toString().toLowerCase().includes(this.genereSelected.toLowerCase()))
    }
    else if(this.artistSelected !== '' && this.genereSelected === ''){
      return this.filteredSongs = this.songs.filter(song => song.artist.toLowerCase().includes(this.artistSelected.toLowerCase()))
    }
    else{
      return this.filteredSongs = this.songs.filter(song => song.genres.toString().toLowerCase().includes(this.genereSelected.toLowerCase()) && song.artist.toLowerCase().includes(this.artistSelected.toLowerCase()))
    }

  }
}
