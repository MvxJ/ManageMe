import { Injectable } from "@angular/core";
import { addDoc, updateDoc, deleteDoc, collectionData, doc, Firestore, query, where, getDocs } from '@angular/fire/firestore';
import { collection } from "@firebase/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { TaskModel } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private fireStore: Firestore) {}

    addTask(task: TaskModel) {
        task.key = doc(collection(this.fireStore, 'id')).id;

        return addDoc(collection(this.fireStore, 'Tasks'), task);
    }

    deleteTask(task: TaskModel) {
        let docRef = doc(this.fireStore, `Tasks/${task.key}`);

        return deleteDoc(docRef);
    }

    updateTask(task: TaskModel) {
        let docRef = doc(this.fireStore, `Tasks/${task.key}`);

        return updateDoc(docRef, task)
    }

    getTasks(): Observable<TaskModel[]> {
        let tasksRef = collection(this.fireStore, 'Tasks');
        const tasks = collectionData(tasksRef, {idField: 'key'}) as Observable<TaskModel[]>;
        
        return tasks;
    }

    getTasksByFuncitonalityKey(key: string): Observable<TaskModel[]> {
        const usersRef = collection(this.fireStore, 'Tasks');
        const queryRef = query(usersRef, where('functionalityKey', '==', key));
    
        return collectionData<any>(queryRef, { idField: 'key' }).pipe(
            map((tasks: TaskModel[]) => {
                if (tasks.length > 0) {
                    return tasks;
                } else {
                    return [];
                }
            })
        );
    }

    getTasksByProjectKey(key: string): Observable<TaskModel[]> {
        const usersRef = collection(this.fireStore, 'Tasks');
        const queryRef = query(usersRef, where('projectKey', '==', key));
    
        return collectionData<any>(queryRef, { idField: 'key' }).pipe(
            map((tasks: TaskModel[]) => {
                if (tasks.length > 0) {
                    return tasks;
                } else {
                    return [];
                }
            })
        );
    }
    
    getUserTasks(userKey: string): Observable<TaskModel[]> {
        const usersRef = collection(this.fireStore, 'Tasks');
        const queryRef = query(usersRef, where('userKey', '==', userKey));
    
        return collectionData<any>(queryRef, { idField: 'key' }).pipe(
            map((tasks: TaskModel[]) => {
                if (tasks.length > 0) {
                    return tasks;
                } else {
                    return [];
                }
            })
        );
    }

    getTaskByKey(key: string): Observable<TaskModel[]> {
        const tasksRef = collection(this.fireStore, 'Tasks');
        const queryRef = query(tasksRef, where('key', '==', key));
    
        return collectionData<any>(queryRef, { idField: 'key' }).pipe(
            map((tasks: TaskModel[]) => {
                if (tasks.length > 0) {
                    return [tasks[0]];
                } else {
                    return [];
                }
            })
        );
    }
}