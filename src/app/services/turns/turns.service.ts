import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TurnsService {


  private collection: string = "turns";

  constructor(private firestore: AngularFirestore) { }

  /**
   * getAll
   */
  public getAll() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }

  /**
   * save
   */
  public save(turn, document) {
    return this.firestore.collection(this.collection).doc(document).set(turn);
  }
}
