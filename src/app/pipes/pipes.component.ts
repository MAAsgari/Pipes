import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  myvalue = 'Must Show Uppercase';
  myDate = new Date(2017, 4, 17);
  toggle = true;
  values = ['Beans', 'Milk', 'Bread', 'Alia', 'Peach'];
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = Observable.interval(4000)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }

  ngOnInit() {
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFrmat() {
    this.toggle = !this.toggle;
  }
  //The Angular AsyncPipe is an interesting example of an impure pipe.
}
