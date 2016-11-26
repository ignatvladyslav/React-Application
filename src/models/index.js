import { loaddirectories } from 'services';
import { parse } from 'qs';

export default {

  namespace: 'app',

  state: {
    folders: [1,2,3,4,5,6,7,8],
    
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *loaddirectories(action, {call, put}) {
      const data = yield call(loaddirectories);
      console.log(data)
    },
  },

  reducers: {
    fetchFolders(state, action) {
      return state;
    },
  },

}
