import client from "./client";

const endpoint = '/token/'

const login = (username, password) => client.post({ username, password});

export default {
    login,
}