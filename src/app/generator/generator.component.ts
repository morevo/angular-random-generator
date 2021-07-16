import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  interpolation: ['{{', '}}'],
})
export class Generator implements OnInit {
  constructor() {}

  chars = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z',1,2,3,4,5,6,7,8,9,];

  start: any = '';
  blue: string = '';
  red: string = '';
  ngOnInit() {
    interval(3000)
      .pipe(
        map((): any => {
          return `${this.chars[Math.floor(Math.random() * this.chars.length)]}${
            this.chars[Math.floor(Math.random() * this.chars.length)]
          }${this.chars[Math.floor(Math.random() * this.chars.length)]}${
            this.chars[Math.floor(Math.random() * this.chars.length)]
          }${this.chars[Math.floor(Math.random() * this.chars.length)]}`;
        })
      )
      .subscribe((v) => {
// Numbers
        if (typeof v === 'number' && v !== 0) {
          this.blue = 'blue';
          this.start = v;
        } else {
          this.start = v;
          this.blue = '';
        }
// Null
        for (let i = 0; i < v.length; i++) {
          if (v[i] == '0' || v[i] == 0) {
            this.start = '';
          }
        }
// Polindrom
        for (let i = 0; i < v.length; i++) {
          let polindrom = v.split('').reverse().join('');
          if (v === polindrom && v !== '0') {
            this.red = 'red';
            this.start = v;
          } else {
            this.start = v;
            this.red = '';
          }
        }
      });
  }
}
