import { createStore } from 'redux';
// import { connect, Provider } from 'react-redux';

/*export default class EmployeeList {

  _store = null;

  constructor() {
    this._store = createStore(this._reducer);

    this._store.dispatch({
      type: 'SET_USER',
      user: {
        avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
        name: "Dave",
        followers: 1234,
        following: 123
      }
    });
  }

  _reducer = function(state = {}, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  }
}*/