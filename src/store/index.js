
import fx from "../fx"
import reducers from './reducers';
import actions from './actions';

const MyStore = new fx.AppStore(actions, reducers);



export default MyStore;


