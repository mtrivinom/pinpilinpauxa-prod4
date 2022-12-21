
export class Song {

  id: number;
  title: string;
  artist: string;
  year: string;
  album: string;
  genres: string[];
  producer: string;
  songwriter: string;
  duration: string;
  language: string;
  explicit: string;
  source: string;

  constructor(){

    this.id = 0;
    this.title = '';
    this.artist='';
    this.year='';
    this.album='';
    this.genres=[];
    this.producer='';
    this.songwriter='';
    this.duration='';
    this.language='';
    this.explicit='';
    this.source='';

  }

}
