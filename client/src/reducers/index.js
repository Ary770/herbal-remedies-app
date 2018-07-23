import { combineReducers } from 'redux';
import herbs from './herbs';
import likes from './likes';
import medicinalUses from './medicinalUses';

export default combineReducers({
  herbs, likes, medicinalUses
});
