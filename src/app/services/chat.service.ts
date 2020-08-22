import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';





@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public usuarios: any = {}
  public chats: Mensaje[] = []

  constructor( private afs: AngularFirestore,
               public auth: AngularFireAuth ) {
    this.auth.authState.subscribe( user => {
      console.log('State',user)
      if( !user ){
        return
      }

      this.usuarios.nombre = user.displayName
      this.usuarios.uid = user.uid
    } )
  }

  login( proveedor:string ) {
    proveedor === 'twitter' ? this.auth.signInWithPopup(new auth.TwitterAuthProvider()) :  this.auth.signInWithPopup(new auth.GoogleAuthProvider()) 
  }
  logout() {
    this.usuarios = {}
    this.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5))
    return this.itemsCollection.valueChanges().pipe(map( (mensajes:Mensaje[]) => {
      console.log(mensajes);
      this.chats = []
      for ( let mensaje of mensajes ) {
        this.chats.unshift( mensaje )  
      }
      return this.chats
    }))
    
  }

  agregarMensaje( text:string ) {
    let mensaje:Mensaje = {
        nombre: this.usuarios.name,
        mensaje: text,
        fecha: new Date().getTime(),
        uid: this.usuarios.uid
       
    }
    return this.itemsCollection.add( mensaje )
  }
}
