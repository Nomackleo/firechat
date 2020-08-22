import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireChat';
  

  constructor( public cs:ChatService ) {
    
  }
}
