import { defaultState } from './state';

export const SET_PROFILE = 'SET_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';

export default {
  [SET_PROFILE] (state, data) {
    state.user = data;
  },
  [RESET_PROFILE] (state) {
    Object.assign(state, defaultState())
  }
}
