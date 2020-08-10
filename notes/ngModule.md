# NgModule

Angular 的基本构造块是 NgModule，它为组件提供了编译的上下文环境。 NgModule 会把相关的代码收集到一些功能集中。

Angular 应用就是由一组 NgModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多特性模块。


## 元数据：
### declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。

### exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。

### imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。

### providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供者，这通常是首选方式。）

### bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。


``` javascript
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

```