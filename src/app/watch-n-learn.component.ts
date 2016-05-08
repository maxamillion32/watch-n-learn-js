import { Component } from '@angular/core';

// Angular Material
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon } from '@angular2-material/icon';
@Component({
  moduleId: module.id,
  selector: 'watch-n-learn-app',
  templateUrl: 'watch-n-learn.component.html',
  styleUrls: ['watch-n-learn.component.css'],
  directives: [ MdToolbar, MdIcon ]
})
export class WatchNLearnAppComponent {
  title = 'Watch n Learn';
}
