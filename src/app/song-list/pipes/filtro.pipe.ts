import { Pipe, PipeTransform } from '@angular/core';
import { Song } from 'src/app/song/song';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(songs: Song[], textSong:string): Song[] {
    // declarando la el array de songs donde almacenaremos la lista de songs candidatas
    let candidateSongs: Song[]=[];

    if( textSong ==''){
      return songs;
    }
    else{
      for(let s of songs){
        if(

          (textSong != null && textSong !='' && (s.title.toUpperCase().indexOf(textSong.toUpperCase())>-1
              || s.artist.toUpperCase().indexOf(textSong.toUpperCase())>-1)))
          candidateSongs.push(s);

      }
      return candidateSongs;
    }
  }

}
