import { Component, OnInit } from '@angular/core';
import { Subject, of, Scheduler, Observable } from 'rxjs';

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
    // 单播
    let ob = of<Number[]>([1, 2, 3, 4, 5])
    ob.subscribe(v => console.warn('发布：', v), err => console.error(err), () => console.warn('发布完成'))
    ob.subscribe(v => console.warn('发布2：', v), err => console.error(err), () => console.warn('发布完成2'))
    ob.subscribe(v => console.warn('发布3：', v), err => console.error(err), () => console.warn('发布完成3'))

    // 多播
    let s = new Subject(  )

    s.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    s.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    s.next(1);
    s.next(2);
    s.next(3)

  }
}
