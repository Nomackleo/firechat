import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(  public cs:ChatService ) { }

  ngOnInit(): void {
  }

  ingresar( proveedor:string ) {
    console.log(proveedor);

    this.cs.login( proveedor )
  }
}
