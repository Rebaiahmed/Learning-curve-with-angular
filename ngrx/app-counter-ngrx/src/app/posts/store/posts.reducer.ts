import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/counter/store/counter.state";
import { addPostSuccess, deletePostSuccess, loadPostsSuccess, updatePostSuccess } from "./posts.actions";
import { postsAdapter } from "./posts.state";


const _postReducer = createReducer(
  initialState,
on(addPostSuccess,  (state, action) =>{
  return postsAdapter.addOne(action.post, {
    ...state,
    count: state.count + 1,
  });
}),
on(updatePostSuccess, (state, action) => {
  return postsAdapter.updateOne(action.post, state);
}),
on(deletePostSuccess, (state, { id }) => {
  return postsAdapter.removeOne(id, state);
}),
on(loadPostsSuccess, (state, action) => {
  return postsAdapter.setAll(action.posts, {
    ...state,
    count: state.count + 1,
  });
})

)


export function postsReducer(state, action) {
  return _postReducer (state, action);
}
