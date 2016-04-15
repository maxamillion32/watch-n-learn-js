import { Component } from '@angular/core';

// Angular Material
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon } from '@angular2-material/icon';
import { MdButton, MdAnchor } from '@angular2-material/button';

import { AngularFire } from 'angularfire2';

import { User } from './shared';

@Component({
  moduleId: module.id,
  selector: 'watch-n-learn-app',
  templateUrl: 'watch-n-learn.component.html',
  styleUrls: ['watch-n-learn.component.css'],
  directives: [ MdToolbar, MdIcon, MdButton, MdAnchor ]
})
export class WatchNLearnAppComponent {
  title = 'Watch n Learn';
  user: User;

  constructor(private af: AngularFire) {
    af.auth.subscribe(
      auth => {
        if (auth.github) {
          this.user = new User;
          this.user.id = auth.github.id;
          this.user.name = auth.github.displayName;
          this.user.email = auth.github.email;
          this.user.avatar = auth.github.profileImageURL;
          this.user.username = auth.github.username;
        }
      }
    );
  }

  login() {
    this.af.auth.login();
  }
}
