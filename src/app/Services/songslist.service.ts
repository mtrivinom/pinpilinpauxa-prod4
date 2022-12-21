import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Song } from '../song/song';
import { SongListComponent } from '../song-list/song-list.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class SongslistService {

  private songCollection: AngularFirestoreCollection<any>;

  public song: any[] = [];

  constructor(private afs: AngularFirestore) { 
    this.songCollection = this.afs.collection('song');
  }

  getSong(): Observable<Song[]>{
    return this.afs.collection<Song>('song').valueChanges();
}

  insertSong(song: Song){
    this.songCollection.add({
      id: song.id,
      title: song.title,
      artist: song.artist,
      year: song.year,
      album: song.album,
      genres: song.genres,
      producer: song.producer,
      songwriter: song.songwriter,
      duration: song.duration,
      language: song.language,
      explicit: song.explicit,
      source: song.source
    });
  }

  modifySong(song: Song){
    return this.songCollection.doc(song.title).update(song);
  }

  deleteSong(song: Song){
    return this.songCollection.doc(song.title).delete();
  }

}
