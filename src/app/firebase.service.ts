import { IChassis, IEngineTransExhaust } from './chassis.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  public addChassisData(data: IChassis) {
    this.db.collection('Chasssis').add(data);
  }

  public addEngineTransData(data: IEngineTransExhaust) {
    this.db.collection('EngineTrans').add(data);
  }
}
