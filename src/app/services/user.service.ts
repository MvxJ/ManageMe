import { Injectable } from "@angular/core";
import { addDoc, updateDoc, deleteDoc, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection } from "@firebase/firestore";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private fireStore: Firestore) {}

    addUser(user: UserModel) {
        user.id = doc(collection(this.fireStore, 'id')).id;

        return addDoc(collection(this.fireStore, 'Users'), user);
    }

    deleteUser(user: UserModel) {
        let docRef = doc(this.fireStore, `Users/${user.id}`);

        return deleteDoc(docRef);
    }

    updateUser(user: UserModel) {
        let docRef = doc(this.fireStore, `Users/${user.id}`);

        return updateDoc(docRef, user)
    }

    getUsers(): Observable<UserModel[]> {
        let projectsRef = collection(this.fireStore, 'Users');
        const users = collectionData(projectsRef, {idField: 'id'}) as Observable<UserModel[]>;
        
        return users;
    }
}