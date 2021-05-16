import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCount } from 'src/app/counter/store/counter.selector';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../store/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>;
  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.count$ = this.store.select(getCount);
  }

}
