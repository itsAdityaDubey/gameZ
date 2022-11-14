import { Component, OnInit, ViewChild } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})

export class TetrisComponent implements OnInit{

  constructor() { }

  @ViewChild('fullScreen') divRef!:any;
  @ViewChild('start') divStart!:any;
  @ViewChild('resume') divResume!:any;
openFullscreen() {
  // Use this.divRef.nativeElement here to request fullscreen
  const elem = this.divRef.nativeElement;
  const start = this.divStart.nativeElement;
  const resume = this.divResume.nativeElement;
console.log('a');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  elem.src="https://itsadityadubey.github.io/tetris/";
  setTimeout(function() {
        elem.contentWindow.focus();
      }, 900);
  start.style.display = "none";
  resume.style.display = "block";
}
Fullscreen() {
  // Use this.divRef.nativeElement here to request fullscreen
  const elem = this.divRef.nativeElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  setTimeout(function() {
    elem.contentWindow.focus();
  }, 100)
}

  ngOnInit(): void {
  }

}
