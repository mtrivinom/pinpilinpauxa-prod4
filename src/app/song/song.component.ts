import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from './song';
import {FormControl} from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
 /* Declaración de variables/atributos necesarios **/
 @Input() song: Song;
 // songs: Song[] =  new SongsServices().songsList;;
  //songId: string | null = '';
  //listeners: string = '';
  genres = new FormControl();
/**
 * Utilizamos el provided ActivatedRoute para recoger el id de la url
 * @param activatedRoute provee acceso a la información relacionadas con las rutas
 * de un componente
 */
  constructor()
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
}
