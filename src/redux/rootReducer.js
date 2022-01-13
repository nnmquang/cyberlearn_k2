import {combineReducers} from 'redux';
import BaiTapGameXucXacReducer from '../BaiTapRedux/BaiTapXucXacReducer';

import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer';
import BaiTapOanTuXiReducer from '../BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXiReducer';
import BurgerReducer from '../redux/Reducers/BurgerReducer';

const rootReducer = combineReducers({    //Store tổng của ứng dụng
   stateGioHang: BaiTapGioHangReducer,   //state giỏ hàng
   // BaiTapGameXucXacReducer: BaiTapGameXucXacReducer 
   //Tên giá trị bằng tên thuộc tính thì trong ES6 có thể bỏ 1 phần, sẽ lấy tên biến render ra tên thuộc tính luôn
   BaiTapGameXucXacReducer,  //state bài tập Game
   //state bài tập Oan tu xì
   BaiTapOanTuXiReducer,
   BurgerReducer
})

export default rootReducer;