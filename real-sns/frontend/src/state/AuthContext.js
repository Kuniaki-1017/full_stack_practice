//グローバルコンテキストを作成できるライブラリをインポート
import {createContext, useReducer} from "react";
//別ファイルで定期したAuthReducerをインポート
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
    // user: null,
    user:{
        _id: "64cf11379925232524853c9d",
        username: "kuniaki",
        email: "kuniaki@gmail.com,",
        password: "kuniaki0504",
        profilePicture: "",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin :false,
    },
    isFetching: false,
    error: false,
};
//状態をグローバルに管理する
//createContext関数でinitialStateをグローバルコンテキストとして定義
export const AuthContext = createContext(initialState);


//認証の状態をどこからでも提供できる関数を定義
export const AuthContextProvider = ({children}) => {
//useReducer関数を使用して状態管理を行う。第一引数に新しい状態にする関数、第二引数に初期値の状態を渡す
//stateには初期値および現在の状態が常に入り、dixpatchにはどういうactionを実行したか？するか？
//useReducerはuseStateと非常に似ている
//dispatchはactionを実行する関数と思って良い
    const [state, dispatch] = useReducer(AuthReducer, initialState);


    return (
        // createContextを使用することでProvider修飾子を使えるタグ→どこにでも提供できる
        <AuthContext.Provider value={{
            user:state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
             
        }}>
            {/* 今回で言うとapp.jsをchildlenに入れる */}
            {children}
        </AuthContext.Provider>
    )
}