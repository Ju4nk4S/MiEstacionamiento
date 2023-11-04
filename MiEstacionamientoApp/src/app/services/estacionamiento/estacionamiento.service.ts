import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Estacionamiento } from 'src/app/interfaces/estacionamiento/estacionamiento';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

    constructor(public firestrore: Firestore) { }
  addLugar(lugar:Estacionamiento){
    const placeRef = collection(this.firestrore, 'lugar');
    return addDoc(placeRef, lugar);
  }
}