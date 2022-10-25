export const LoginStart = (usercredentials) => ({
    type : "LOGIN_START" ,
})


export const LoginSuccess = (user) => ({
    type : "LOGIN_SUCCESS",
    payload: user
})


export const LoginFailed = () => ({
    type : "LOGIN_FAILED"
})

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
  });

export const UpdateFailed = () => ({
    type : "UPDATE_FAILED"
})

export const Logout= () => ({
    type : "LOGOUT"
})