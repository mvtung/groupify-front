/* eslint-disable @typescript-eslint/no-explicit-any */
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
  } catch (error: any) {
    return error.response;
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
  } catch (error: any) {
    return error.response;
  }
}

export const logout = async () => {
  try {
    const response = await api.get(`/api/auth/logout`, { withCredentials: true });

    return response.data;
  } catch (error: any) {
    return error.response;
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
  } catch (error: any) {
    return error.response;
  }
}

export const getGroup = async () => {
  try {
    const response = await api.get(`/api/groups`, { withCredentials: true });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export const getUsers = async () => {
  try {
    const response = await api.get(`/api/users`, { withCredentials: true });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response;
  }
}

export const getGroupUser = async (groupId: string) => {
  try {
    const response = await api.get(`/api/user-groups/groups/${groupId}`, { withCredentials: true });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export const createGroup = async (form: object) => {
  try {
    const response = await api.post('/api/groups', form, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export const updateUser = async (userId: string, form: object) => {
  try {
    console.log(userId, form);

    const response = await api.put(`/api/users/${userId}`, form, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export const deleteGroup = async (id: string) => {
  try {
    const response = await api.delete(`/api/groups/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export const deleteUser = async (id: string) => {
  try {
    const response = await api.delete(`/api/users/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}