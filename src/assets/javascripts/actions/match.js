import appDispatcher from '../dispatcher/app-dispatcher';

export default {
  trial: (row) => {
    appDispatcher.dispatch({
      actionType: 'TRIAL',
      id: row.id
    });
  }
}
