import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';
  constructor(private router: Router) {
  }
}
