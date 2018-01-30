import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
      trigger('projects', [
        transition('* => *',[
          query('', style({opacity: 0}), {optional:true}),

          query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity:0, transform:'translateY(-75%)', offset: 0}),
              style({opacity:0.5, transform:'translateY(35px)', offset: .3}),
              style({opacity:0, transform:'translateY(0)', offset: 1})
            ]))
          ]), {optional:true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity:1, transform:'translateY(0)', offset: 0}),
              style({opacity:0.5, transform:'translateY(35px)', offset: .3}),
              style({opacity:0, transform:'translateY(-75%)', offset: 1})
            ]))
          ]), {optional:true})



        ])
      ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;

  btnText: string = 'Add project >>>';
  projectText: string = 'Project No. 1';
  //projects = ["Flying car","Great game","Trip to Miami"];
  projects = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
 
    this._data.project.subscribe(res => this.projects = res);
    this.itemCount = this.projects.length;
    this._data.changeProj(this.projects);
  }


  addProject(){
    this.projects.push(this.projectText);
    this.projectText = '';
    this.itemCount = this.projects.length;
    this._data.changeProj(this.projects);
  }

  removeProj(i){
    this.projects.splice(i, 1);
    this._data.changeProj(this.projects);
  }
}
