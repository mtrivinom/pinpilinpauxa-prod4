import { Pipe, PipeTransform } from '@angular/core';
import { Song } from 'src/app/song/song';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(songs: Song[], textSong:string,textArtist:string,textGenere:string,page:number = 0): Song[] {
    // declarando la el array de songs donde almacenaremos la lista de songs candidatas
    let candidateSongs: Song[]=[];
    console.log('# values filter textSong:'+textSong+' textArtist:'+textArtist+' textGenere:'+textGenere);


    if( textSong =='' && textArtist =='' && textGenere=='')
     return songs;

    for(let s of songs){
      if(

        (textSong != null && textSong !='' && (s.title.toUpperCase().indexOf(textSong.toUpperCase())>-1
            || s.artist.toUpperCase().indexOf(textSong.toUpperCase())>-1))
            || ( textArtist != null && textArtist !='' &&  s.artist.indexOf(textArtist)>-1)
            || ( textGenere != null && textGenere !='' &&  s.genres.toString().indexOf(textGenere)>-1))
        candidateSongs.push(s);

    }
    return candidateSongs;

  }

}
