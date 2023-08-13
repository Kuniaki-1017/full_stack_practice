//ユーザー入力に応じたアクションの設定

export const LoginStart = (user) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    // type　→ アクションの名前
    type: "LOGIN_SUCCCCES",
    // payload　→ 状態
    payload: user,
});

export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
});