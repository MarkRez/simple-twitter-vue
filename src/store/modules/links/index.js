import {faEnvelope, faListAlt, faUser} from "@fortawesome/free-regular-svg-icons";
import {faSignInAlt, faUnlock, faUserPlus} from "@fortawesome/free-solid-svg-icons";

export default {
  namespaced: true,
  getters: {
    sidebarLinks(state) {
      const currentUserId = 1;
      // const currentUserId = state.user.id

      return {
        authenticatedLinks: [
          {
            text: 'My page',
            link: {name: 'User', params: {id: currentUserId}},
            icon: faUser
          },
          {
            text: 'Messages',
            link: {name: 'Messages'},
            icon: faEnvelope
          },
          {
            text: 'Feed',
            link: {name: 'Feed'},
            icon: faListAlt
          },
        ],

        nonAuthenticatedLinks: [
          {
            text: 'Login',
            link: {name: 'Login'},
            icon: faSignInAlt
          },
          {
            text: 'Registration',
            link: {name: 'Registration'},
            icon: faUserPlus
          },
          {
            text: 'Password recovery',
            link: {name: 'Recovery'},
            icon: faUnlock
          },
        ]
      }
    }
  }
}
