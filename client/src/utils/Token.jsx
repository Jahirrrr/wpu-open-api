/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


const Token = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const config = {
    headers: {
      'x-auth-token': `${user.token}`,
    },
  };

  return config;
};

export default Token;
