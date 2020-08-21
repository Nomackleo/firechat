import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string = ""
  

  constructor( public cs:ChatService ) {
    this.cs.cargarMensajes().subscribe( () => {
      
    } )
   }

  ngOnInit(): void {
  }
  enviar_mensaje() {
    if ( this.mensaje.length === 0 ) {
      return
    }
    this.cs.agregarMensaje( this.mensaje )
    .then( () => this.mensaje = "")
    .catch( (err) => console.log('Error', err ) )

    
  }

  
}
