export const SET_LOADING = 'SET_LOADING';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export default {
  [SET_LOGGED_IN] (state, status) {
    state.loggedIn = status
  },
  [SET_LOADING] (state, status) {
    console.log(status)
    state.loading = status;
  },
}
