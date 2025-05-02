const baseUrls = {
    development: 'http://10.9.0.7:3002/',
    staging: '',
    production: '',
    test: '',
}

const baseUrl = baseUrls[process.env.NODE_ENV || 'development']

export default baseUrl