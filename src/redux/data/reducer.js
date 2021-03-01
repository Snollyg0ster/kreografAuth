//import _ from 'lodash';
import {actions} from './actions';

export const goodsInitialState = {
  artCode: null,
  bought: null,
  cost: '-',
  discounts: [
    {id: '1', number: '-', title: '-'},
    {id: '2', number: '-', title: '-'},
    {id: '3', number: '-', title: '-'},
    {id: '4', number: '-', title: '-'},
  ],
  needToBuy: null,
  title: '-',
  img: '-',
};

const goodsReducer = (state = goodsInitialState, action) => {
  switch (action.type) {
    case actions.DATA_SUCCESS:
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default goodsReducer;
