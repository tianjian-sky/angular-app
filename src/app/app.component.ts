import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/concatMap'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of Heroes';
  name = 'tianjian-sky';

  ngOnInit(): void {
    let ob = Observable.of<Number[]>([1, 2, 3, 4, 5])
    ob.subscribe(v => console.warn('发布：', v), err => console.err(err), () => console.warn('发布完成'))
    ob.subscribe(v => console.warn('发布2：', v), err => console.err(err), () => console.warn('发布完成2'))
    ob.subscribe(v => console.warn('发布3：', v), err => console.err(err), () => console.warn('发布完成3'))
  }
}
