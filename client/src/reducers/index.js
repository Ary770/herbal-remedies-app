import { combineReducers } from 'redux';
import herbs from './herbs';
import likes from './likes';
import medicinal_uses from './medicinal_uses';

export default combineReducers({
  herbs, likes, medicinal_uses
});
