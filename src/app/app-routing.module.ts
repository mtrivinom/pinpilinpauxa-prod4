import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  { path: '',redirectTo:'/songlist', pathMatch:'full'},
  { path: 'song/:id', component: SongComponent},
  { path: 'songlist', component: SongListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
