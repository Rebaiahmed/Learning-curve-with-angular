import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "./auth.action.types";
import { User } from "./model/user";

export interface AuthState {
  user : User
}


export const initialAuthState: AuthState ={
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login,(state, action) =>
  {
    return {
      user: action.user
  }
  }),

  on(AuthActions.logout,(state, action) =>
  {
    return {
      user: undefined
  }
  })

)
