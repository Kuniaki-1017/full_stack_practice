// AuthReducerにてAuthActionの値に応じた条件分岐をswitch文で実装。
const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCCCES":
            return{
                user:action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_ERROR":
            return{
                user:null,
                isFetching: false,
                error: action.payload,
            };
        default: 
        return state;
    }
};

export default AuthReducer;