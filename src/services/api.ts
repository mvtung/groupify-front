import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8191'
});

export const resetPassword = (email: string) => {
  return api.post('/password/reset', { email });
}

export const login = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await api.post('/api/auth/login', {
      usernameOrEmail,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    return response.data;

  } catch (error) {
    console.log(error);
  }
}

export const register = async (form: object) => {
  try {
    const response = await api.post('/api/auth/register', form, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    return response.data;

  } catch (error) {
    console.log(error);
  }
}