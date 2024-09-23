import api from "./api";
import IUser from "types/user.type";

export const userLogin = async (userCredentials: Pick<IUser, 'email' | 'password'>): Promise<{ user: IUser; token: string }> => {
  const response = await api.get(`/users?email=${userCredentials.email}&password=${userCredentials.password}`);
  const users: IUser[] = response.data;

  // Check if no user is found
  if (users.length === 0) {
    throw new Error('Invalid email or password.');
  }

  // If a user is found, generate a random token
  const user = users[0]; // Assuming you only need the first match
  const token = Math.random().toString(36).substr(2); // Generate a random token
  localStorage.setItem('token', token);
  return { user, token };
};
export const createUser = async (user: Omit<IUser, 'id'>): Promise<IUser> => {
  const response = await api.post('/users', user);
  return response.data;
};
