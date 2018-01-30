import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private projects = new BehaviorSubject<any>(['Car project','AI project', 'Invention Project']);
  project = this.projects.asObservable();

  constructor() {

   }

   changeProj(gl){
    this.projects.next(gl);
   }
}
