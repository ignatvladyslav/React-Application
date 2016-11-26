import React from 'react';
import { connect } from 'dva';

import Filter from './Menu.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fields: [6,5,4,3,2,1]
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch({type: 'app/loaddirectories'})
  return {
    loaddirectories: console.log
  }
}

export default connect(mapStateToProps)(Menu);