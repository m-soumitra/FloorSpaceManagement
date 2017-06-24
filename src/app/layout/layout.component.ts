import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isDarkTheme = false;
  public lastDialogResult: string;
  public progress = 0;
  @ViewChild('sideMenu') public sideMenu: any;

  // constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) { }
  constructor(private _router: Router, private _dialog: MdDialog, private _snackbar: MdSnackBar) {
      // Update the value for the progress-bar on an interval.
      setInterval(() => {
          this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
      }, 200);
  }

  ngOnInit() {
  }
/*
  public ngAfterViewInit() {
    if (screen.width > 1000) {
      this.sideMenu.toggle();
    }
  }*/

  /*public logout() {
      this._router.navigate(['/login']);
  }*/

}
