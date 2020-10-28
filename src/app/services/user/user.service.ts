import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { }

  private collection: string = "users";


  public create(user) {
    return this.firestore.collection(this.collection).add(user);

  }

  public getAll() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }

}
