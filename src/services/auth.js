import jwt from 'jsonwebtoken';

export const TOKEN_KEY = "@tw314-Token";
export const ID_KEY = "@tw314-ID";
export const TICKET_KEY = "@tw314-ticket";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const hasTicket = () => localStorage.getItem(TICKET_KEY) !== null;

export const getJwt = () => jwt.sign({}, "tw314p@ssw0rd");
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setId = id => localStorage.setItem(ID_KEY, id);
export const getId = () => localStorage.getItem(ID_KEY);

export const setTicket = ticket => localStorage.setItem(TICKET_KEY, ticket);
export const getTicket = () => localStorage.getItem(TICKET_KEY);

export const login = token => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);