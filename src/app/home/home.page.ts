import { Component, OnInit } from '@angular/core';
import {MOVIE} from '../../assets/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public movie = MOVIE

  constructor() {}

}

