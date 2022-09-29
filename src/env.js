export const dev = window.location.origin.includes('localhost')
<<<<<<< HEAD
export const baseURL = 'https://bcw-sandbox.herokuapp.com/'
=======
export const baseURL = dev ? 'https://bcw-sandbox.herokuapp.com/' : ''
>>>>>>> 4a95f146cf2de2b5b9c2a5dea0925f9a7a19fb57
export const useSockets = false
export const domain = 'codeworksclassroom.auth0.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
export const audience = 'https://codeworksclassroom.com'
