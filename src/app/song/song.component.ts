import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from './song';
import {FormControl, FormGroup} from '@angular/forms';
import {SongslistService } from '../Services/songslist.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
 /* Declaración de variables/atributos necesarios **/
 @Input() song: Song;
 @Input() generes: string[] = [];

 // songs: Song[] =  new SongsServices().songsList;;
  //songId: string | null = '';
  //listeners: string = '';

  myForm = new FormGroup({
    title: new FormControl(''),
    artist: new FormControl(''),
    year: new FormControl(''),
    album: new FormControl(''),
    genres: new FormControl(''),
    producer: new FormControl(''),
    songwriter: new FormControl(''),
  })

  showSaved :boolean = false;

/**
 * Utilizamos el provided ActivatedRoute para recoger el id de la url
 * @param activatedRoute provee acceso a la información relacionadas con las rutas
 * de un componente
 */
  constructor(private songslistService: SongslistService)
    {
      this.song = new Song();
      /** Creamos una instancia de songServices que contiene el array de canciones */
      //this.songs =

    }
/**
 * Ciclo de vida que se ejecuta al inicio de montar el componente.
 * Aquí recogemos el id de la url para poder encontrar el objeto que
 * corresponde con el id.
 */
  ngOnInit(): void {
    /*
    this.activatedRoute.paramMap.subscribe((params: { get: (arg0: string) => string | null; }) => {
      this.songId = params.get('id');
    });
    */

    // se pone el signo de admiracion para que el retorno
    //del metodo find solo sea de tipo de la clase Song
   // this.song = this.songs.find((item:Song) => item.id == Number(this.songId))!;


  }
  
  save(){
    this.songslistService.updateSong(this.song.id, this.myForm.value).then(()=>{
      this.showSaved = true;
      setTimeout(() => this.showSaved = false, 3000);
    });

  }
}
