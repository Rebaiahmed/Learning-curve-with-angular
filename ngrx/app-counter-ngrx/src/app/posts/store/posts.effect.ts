import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { PostService } from "src/app/services/post.service";
import { loadPosts } from "./posts.actions";




@Injectable()
export class PostsEffects
{



  constructor(  private actions$: Actions,
    private postsService: PostService,
    private store: Store<AppState>)
  {

  }




  loadPosts$ = createEffect( () =>{
  return this.actions$.pipe(
    ofType(loadPosts),
    withLatestFrom(this.store.select(getPosts)),
  )

  })

}
