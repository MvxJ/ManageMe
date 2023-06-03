import { Injectable } from "@angular/core";
import { addDoc, updateDoc, deleteDoc, collectionData, doc, Firestore, query, where, getDocs } from '@angular/fire/firestore';
import { collection } from "@firebase/firestore";
import { Observable } from "rxjs";
import { FunctionalityModel } from "../models/functionality.model";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FunctionalityService {
    constructor(private fireStore: Firestore) {}

    addFunctionality(functionality: FunctionalityModel) {
        functionality.key = doc(collection(this.fireStore, 'key')).id;

        return addDoc(collection(this.fireStore, 'Functionalities'), functionality);
    }

    deleteFunctionality(functionality: FunctionalityModel) {
        let docRef = doc(this.fireStore, `Functionalities/${functionality.key}`);

        return deleteDoc(docRef);
    }

    updateFunctionality(functionality: FunctionalityModel) {
        let docRef = doc(this.fireStore, `Functionalities/${functionality.key}`);

        return updateDoc(docRef, functionality)
    }

    getFunctionalities(): Observable<FunctionalityModel[]> {
        let functionalitiesRef = collection(this.fireStore, 'Functionalities');
        const functionalities = collectionData(functionalitiesRef, {idField: 'key'}) as Observable<FunctionalityModel[]>;

        return functionalities;
    }

    findFunctionalitiesByProjectKey(projectKey: string): Observable<FunctionalityModel[]> {
        const usersRef = collection(this.fireStore, 'Functionalities');
        const queryRef = query(usersRef, where('projectKey', '==', projectKey));
    
        return collectionData<any>(queryRef, { idField: 'key' }).pipe(
            map((users: FunctionalityModel[]) => {
                if (users.length > 0) {
                    return users;
                } else {
                    return [];
                }
            })
        );
    }
}