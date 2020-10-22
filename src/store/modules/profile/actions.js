import { getProfile } from "@/api";
import { RESET_PROFILE, SET_PROFILE } from './mutations';
import { LOG_OUT } from "@/store/modules/auth/actions";
import { SET_LOADING } from "@/store/modules/auth/mutations";

export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export default {
  async [GET_PROFILE]({ commit, dispatch }) {
    try {
      const response = await getProfile();
      if (response.status === 200) {
        commit(SET_PROFILE, response.data);
      }
    } catch (error) {
      commit(RESET_PROFILE);
      dispatch(`auth/${LOG_OUT}`, null, {root:true});
    } finally {
      commit(`auth/${SET_LOADING}`, false, {root:true});
    }
  },
  async [UPDATE_PROFILE]({ commit }) {
    // TODO
  },
};
