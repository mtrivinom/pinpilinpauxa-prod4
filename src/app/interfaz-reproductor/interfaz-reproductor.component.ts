import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-interfaz-reproductor',
  templateUrl: './interfaz-reproductor.component.html',
  styleUrls: ['./interfaz-reproductor.component.css']
})


export class InterfazReproductorComponent implements OnInit, OnChanges {
  // Importamos el input para poder recibir propiedades
  @Input() source: string =  '';

  // Declaramos las variables necesarias
  public audio: any;
  public duration: number = 0;
  public formatedDuration: string = '';
  public currentTime: number = 0;
  public timeLeft: string = '';
  public currentVolume: number = 90;

  constructor()
  {

  }

  // Función para el botón play
  play(){
    // Arrancamos la canción
    this.audio.play();
    /**
     * Asignamos un escuchador al objeto audio y se ejecuta cada vez que
     * el tiempo se actualiza
     */
    this.audio.addEventListener('timeupdate', () => {
      // Se convierte la duración actual de la canción en porcentaje
      const percent = this.audio.currentTime / this.audio.duration * 100;
      this.currentTime = percent;
      // Asignación al tiempo restante de la canción
      const counter = this.audio.duration - this.audio.currentTime;
      this.timeLeft = this.millisToMinutesAndSeconds(counter);
    });
  }

  // Función para pausar la canción
  pause(){
    this.audio.pause();
  }

  /**
   * Función para parar la canción, reinicia el tiempo y reasigna
   * valor a la variable currentTime
   */
  stop(){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.currentTime = this.audio.currentTime;
  }

  /**
   * Metodo para cargar los datos necesarios de la canción
   */
  loadSong(){
    //Se crea el objeto audio
    this.audio = new Audio(`../../assets/music/${this.source}.mp3`);
    // Se asigna un escuchador al objeto Audio para cuando los datos se han cargado
    this.audio.addEventListener('loadeddata', () => {
      this.duration = this.audio.duration;
      this.currentTime = 0;
      this.formatedDuration = this.millisToMinutesAndSeconds(this.duration);
      this.timeLeft = this.millisToMinutesAndSeconds(this.duration);
      this.audio.volume = .75;
      this.currentVolume = this.audio.volume;
      // Cuando los datos están cargados se reproduce la canción
      this.play();
    });

  }

  /**
   *
   * @param e evento
   * Función para actualizar el tiempo en la barra de progreso
   */
  updateTime(e: any){
    this.audio.currentTime = e.target.value / 100 * this.audio.duration;
    this.audio.addEventListener('timeupdate', () => {
      const percent = this.audio.currentTime / this.audio.duration * 100;
      this.currentTime = percent;
    });
  }

  /**
   *
   * @param e evento
   * Función para actualizar el volumen
   */
  updateVolume(e: any){
    this.audio.volume = e.target.value;
    this.currentVolume = this.audio.volume;
  }

  /**
   *
   * @param millis number
   * @returns String con el tiempo
   * Función que convierte los milisegundos en minutos y segundos
   */
  millisToMinutesAndSeconds(millis: number) {
    const minutes: any = "0" + Math.floor(millis / 60);
    const seconds = "0" + (Math.floor(millis) - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }

  /**
   * Ciclo de vida del componente que se ejecuta inmediatamente despues del contructor
   */
  ngOnInit(): void {
    this.loadSong();
  }

  /**
   *
   * @param changes
   * Ciclo de vida necesario para detectar los cambios cuando se actualizan los datos en el componente
   */
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
    let change = changes['source'];

    if(!change.firstChange){
      this.stop();
      this.audio = null;
      console.log(this.currentTime)
      this.loadSong();

    }
  }

}
