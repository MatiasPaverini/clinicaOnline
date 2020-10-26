import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { }

  private collection: string = "users";


  public create(user) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(this.collection).add(user).then(rest => { }, err => reject(err));
    });

  }

  public getAll() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }

}
