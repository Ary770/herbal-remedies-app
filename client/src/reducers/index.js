import { combineReducers } from 'redux';
import herbs from './herbs';
import likes from './likes';
import medicinalUses from './medicinalUses';
import properties from './properties';

export default combineReducers({
  herbs, likes, medicinalUses, properties
});
