import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated : Observable<boolean>

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(event: Event) {
    event.preventDefault();
    //this.store.dispatch(autoLogout());
  }

}
