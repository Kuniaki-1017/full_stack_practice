export const loginCall = async( user, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const response = await axios.post("auth/login", user);
        dispatch({type: LOGIN_SUCCCCES, payload: response.data});

    }catch(err) {
        dispatch({type: LOGIN_ERROR, payload: err});
    }
}