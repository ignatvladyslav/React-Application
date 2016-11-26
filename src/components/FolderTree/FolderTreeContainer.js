import React from 'react';
import { connect } from 'dva';

import FolderTree from './FolderTree.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fields: state.app.folders,
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch({type: 'app/loaddirectories'});
  dispatch({type: 'app/loadPokemon'});
  return {
    loaddirectories: console.log
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderTree);
