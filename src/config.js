const HOST = process.env.HOST
const ROOT_API = HOST

export const API = {
    user: {
        login: `${ROOT_API}/api/auth/authenticate`,
        me: `${ROOT_API}/api/user/me`,
        test: 'https://jsonplaceholder.typicode.com/todos/{userId}'
    },
}