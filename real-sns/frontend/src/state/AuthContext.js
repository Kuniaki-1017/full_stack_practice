//グローバルコンテキストを作成できるライブラリをインポート
import {createContext, useReducer} from "react";
//別ファイルで定期したAuthReducerをインポート
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

//状態をグローバルに管理する
//createContext関数でinitialStateをグローバルコンテキストとして定義
export const AuthContext = createContext(initialState);

//認証の状態をどこからでも提供できる関数を定義
export const AuthContextProvider = () => {

    const [state, dipatch] = useReducer(AuthReducer, initialState);
}