import { Injectable } from "@angular/core";
import { addDoc, updateDoc, deleteDoc, collectionData, doc, Firestore, query, where, getDocs } from '@angular/fire/firestore';
import { collection } from "@firebase/firestore";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { map } from 'rxjs/operators';

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

    findUser(username: string, password: string): Observable<UserModel[]> {
        const usersRef = collection(this.fireStore, 'Users');
        const queryRef = query(usersRef, where('username', '==', username), where('password', '==', password));
    
        return collectionData<any>(queryRef, { idField: 'id' }).pipe(
            map((users: UserModel[]) => {
                if (users.length > 0) {
                    return [users[0]];
                } else {
                    return [];
                }
            })
        );
    }
}