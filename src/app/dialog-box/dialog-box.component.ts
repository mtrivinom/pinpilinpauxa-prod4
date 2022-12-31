import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song/song';
import { SongslistService } from '../Services/songslist.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  @Input() song: Song;
  
  //se declara la variable songs que es de tipo array de Song (Song[])
  songs: Song[];

  filteredSongs: Song[] = [];

  textSong: string = '';

  artists:string[];

  generes:string[];

  artistSelected :string = '';

  genereSelected :string = '';

  songSelected : Song;
  
  openedForm : boolean = false;
  //etiqueta para el Timeout de guardado
  showSaved :boolean = false;

  myForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    artist: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    album: new FormControl('',[Validators.required]),
    genres: new FormControl('',[Validators.required]),
    producer: new FormControl('',[Validators.required]),
    songwriter: new FormControl('',[Validators.required]),
    duration: new FormControl('',[Validators.required]),
  })

 /**
  * Utilizamos el provided ActivatedRoute para recoger el id de la url
  * @param activatedRoute provee acceso a la información relacionadas con las rutas
  * de un componente
  */

  constructor( private songslistService : SongslistService, public dialog : MatDialog) {

    this.songs =[];
    this.artists=[];
    this.generes=[];
    this.songSelected = new Song();
    
    this.song = new Song();
  }

  ngOnInit(): void {
    //Función para coger todos los generos que tenemos en la base de Datos para poderlos mostrar en el form
    let allGenres: string [] = []
    this.songslistService.getAll().subscribe(data => { console.log(data);
      this.songs = data;
      this.songs.forEach(song => {        
        song.genres.forEach(genre => {
          allGenres.push(genre);
        });
      });
      this.generes = [ ...new Set(allGenres) ];
      this.generes = ["All"].concat(this.generes);
    });

    
  }

  getSong(): void{
    this.songslistService.getAll().subscribe(song => this.songs = song);
  }

  setSong(song:Song){
    this.songSelected = song;
  }
  //Función para crear nuevo elemento en la bbdd
  create(){
    this.songslistService.createSong(this.myForm.value).then(()=>{
      //mensaje de guardado.
      this.showSaved = true;
      setTimeout(() => this.showSaved = false, 3000);
    });

  }

}
