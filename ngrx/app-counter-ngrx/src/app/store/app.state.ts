import { reduce } from "rxjs/operators";
import { reducer } from "../counter/store/counter.reducer";
import { CounterState } from "../counter/store/counter.state";
import { postsReducer } from "../posts/store/posts.reducer";
import { PostsState } from "../posts/store/posts.state";




export interface AppState {
  counter: CounterState,
  posts: PostsState
}

export const appRedcuer = {
  counter: reducer,
  posts: postsReducer
}
