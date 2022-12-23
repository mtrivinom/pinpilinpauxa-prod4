import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Song } from '../song/song';
import { SongComponent } from '../song/song.component';
import { SongListComponent } from '../song-list/song-list.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class SongslistService {

  private songCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) { 
    this.songCollection = collection(this.firestore,'song');
  }

  getAll(): Observable<Song[]> {
    return collectionData(this.songCollection, {
      idField: 'title',
    }) as Observable<Song[]>;
  }

  getSong() {
  }

  insertSong(song: Song){
  }

  modifySong(){
  }

  deleteSong(){
  }

}
