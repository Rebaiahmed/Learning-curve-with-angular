
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { PostsState } from './posts.state';

export const POSTS_STATE_NAME = 'posts';

export const getPostsState =
  createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(
  getPostsState,
  (state: PostsState) => state.posts
);
