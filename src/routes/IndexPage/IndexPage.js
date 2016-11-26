import React from 'react';

import FolderTree from 'components/FolderTree';

import styles from './IndexPage.css';

const IndexPage = ({children}) => {
  return (
    <div className={styles.normal}>
      Index page
      <FolderTree />
    </div>
  );
}

export default IndexPage;
