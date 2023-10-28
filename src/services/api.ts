import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8191'
});

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

export const logout = async () => {
  try {
    const response = await api.get(`/api/auth/logout`, { withCredentials: true });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const resetPassword = async (email: string) => {
  try {
    const response = await api.post('/api/auth/reset-password', { email }, {
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

export const getGroup = async () => {
  try {
    const response = await api.get(`/api/groups`, { withCredentials: true });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}