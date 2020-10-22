import { logOut } from "@/api";
import { SET_LOADING, SET_LOGGED_IN } from './mutations';
import { GET_PROFILE } from "@/store/modules/profile/actions";
import { RESET_PROFILE } from "@/store/modules/profile/mutations";

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export default {
  async [LOG_IN]({ commit, dispatch }) {
    commit(SET_LOADING, true);
    commit(SET_LOGGED_IN, true);
    dispatch(`profile/${GET_PROFILE}`, null, {root:true});
  },
  async [LOG_OUT]({ commit, dispatch }) {
    commit(SET_LOGGED_IN, false);
    try {
      await logOut();
    } finally {
      dispatch(`profile/${RESET_PROFILE}`, null, {root:true});
      localStorage.removeItem('_token');
    }
  },
};
