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

  }

}
