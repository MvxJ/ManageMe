import { Injectable } from "@angular/core";
import { ProjectModel } from "../models/project.model";
import { addDoc, updateDoc, deleteDoc, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection } from "@firebase/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor(private fireStore: Firestore) {}

    addProject(project: ProjectModel) {
        project.key = doc(collection(this.fireStore, 'id')).id;

        return addDoc(collection(this.fireStore, 'Projects'), project);
    }

    deleteProject(project: ProjectModel) {
        let docRef = doc(this.fireStore, `Projects/${project.key}`);

        return deleteDoc(docRef);
    }

    updateProject(project: ProjectModel) {
        let docRef = doc(this.fireStore, `Projects/${project.key}`);

        return updateDoc(docRef, project)
    }

    getProjects(): Observable<ProjectModel[]> {
        let projectsRef = collection(this.fireStore, 'Projects');
        const projects = collectionData(projectsRef, {idField: 'key'}) as Observable<ProjectModel[]>;
        
        return projects;
    }
}