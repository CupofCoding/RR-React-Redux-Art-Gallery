export const logger = (store) => (next) => (actions) => {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState);
    } else {
      console.log('dispatch', store.getState());
      next(action);
      console.log('after dispatch', store.getsState());
    }
  };