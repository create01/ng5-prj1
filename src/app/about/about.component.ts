import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  projects: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.project.subscribe(res => this.projects = res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
