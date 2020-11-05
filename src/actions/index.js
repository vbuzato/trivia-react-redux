export const ADD_USER = 'ADD_USER';
export const USER_HASH = 'USER_HASH';
export const USER_TOKEN = 'USER_TOKEN';

const tokenAPI = 'https://opentdb.com/api_token.php?command=request';

export const userInfo = (name, email) => ({
  type: ADD_USER,
  name,
  email,
});

export const userHash = (hash) => ({
  type: USER_HASH,
  hash,
});

// const avatarGravatar = 'https://www.gravatar.com/avatar/';

// export const avatar = hash =>
//   fetch(`${avatarGravatar}${hash}`).then(response =>
//     response.json().then(result => (result.ok ? Promise.resolve(result) : Promise.reject(result))),
//   );

export const userToken = (token) => ({
  type: USER_TOKEN,
  token,
});

export const fetchToken = () => async (dispatch) => {
  const requestToken = await fetch(tokenAPI);
  const token = await requestToken.json();
  localStorage.setItem('token', token.token);
  return dispatch(userToken(token.token));
};