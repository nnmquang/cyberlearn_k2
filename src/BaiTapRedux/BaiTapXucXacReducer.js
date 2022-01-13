

const stateDefault = {
    taiXiu:true, //True: là tài (từ 3-11), false là xỉu (12<)
    mangXucXac : [
        {ma:1,hinhAnh:'./img/gameXucXac/1.png'},
        {ma:1,hinhAnh:'./img/gameXucXac/1.png'},
        {ma:1,hinhAnh:'./img/gameXucXac/1.png'}
    ],
    soBanThang:0,
    tongSoBanChoi:0

}

const BaiTapGameXucXacReducer =(state=stateDefault,action) => {
    switch (action.type) 
    {
        case 'DAT_CUOC':
          state.taiXiu = action.taiXiu;
          return {...state}
        default : return{...state}
    }
}
export default BaiTapGameXucXacReducer; //phải export thằng này ra để khi người ta import có thể rename tên để giảm quá trình lỗi