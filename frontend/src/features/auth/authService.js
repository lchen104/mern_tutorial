import axios from 'axios';

// making a call to our api/backend
const API_URL = '/api/users/'

// register the user
const register = async (userData) => {

    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


// login the user
const login = async (userData) => {

    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// logout the user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService