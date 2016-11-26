import 'index.html';
import 'index.css';
import { browserHistory } from 'dva/router';
import dva from 'dva';
import router from './router';
import model from './models'

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(model);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
