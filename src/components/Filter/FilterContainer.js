import React from 'react';
import { connect } from 'dva';

import Filter from './Filter.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fields: [1,2,3,4,5, 6]
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch({type: 'app/loaddirectories'})
  return {
    loaddirectories: console.log
  }
}

export default connect(mapStateToProps)(Filter);