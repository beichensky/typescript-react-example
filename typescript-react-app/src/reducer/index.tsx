import { ModifyAction } from '../actions';
import { DECREMENT, INCREMENT } from '../constants';


// 处理并返回 state 
export default (state = 0, action: ModifyAction): number => {
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      default:
        return state
    }
}