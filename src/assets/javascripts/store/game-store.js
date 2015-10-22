import Rx from 'rx';

import mix from '../helpers/mix-stores';
import userStore from './user';
import fieldsStore from './fields';

export default Rx.Observable.combineLatest(userStore.subject, fieldsStore.subject, mix);
