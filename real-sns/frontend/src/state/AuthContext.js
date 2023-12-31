//グローバルコンテキストを作成できるライブラリをインポート
import {createContext, useEffect, useReducer} from "react";
//別ファイルで定期したAuthReducerをインポート
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
    //ローカルストレージにユーザー情報があればログイン状態
    //なければログインしていない切り分けをおこなう
    user: JSON.parse(localStorage.getItem("user")) ||  null,
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

    useEffect(() => {
        //ローカルストレージにユーザーの状態を保存
        localStorage.setItem("user", JSON.stringify(state.user));
    
    }, [state.user]);
    

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