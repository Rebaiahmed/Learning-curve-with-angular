import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";


export const selectedAuthState =   createFeatureSelector<AuthState>("auth");


export const isLoggedIn = createSelector(
  selectedAuthState,
  auth =>  !!auth.user

);


export const isLoggedOut = createSelector(
  selectedAuthState,
  loggedIn => !loggedIn
)
