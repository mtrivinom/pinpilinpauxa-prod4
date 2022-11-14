export class Song {

  id: number;
  title: string;
  artist: string;
  year: number;
  album: string;
  genres: string[];
  producer: string;
  songwriter: string;
  duration: string;
  source: string;


  constructor(){

    this.id = 0;
    this.title = '';
    this.artist='';
    this.year=0;
    this.album='';
    this.genres=[];
    this.producer='';
    this.songwriter='';
    this.duration='';
    this.source='';


  }



}
