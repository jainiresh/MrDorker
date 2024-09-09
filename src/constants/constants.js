exports.BACKEND_URL  = process.env.REACT_APP_BACKEND_URL || ( this.PROD_SWITCH == 0 ? 'http://localhost:3001' :  "https://mr-dorker-backend.onrender.com" ); 
exports.LOGIN_URL = this.BACKEND_URL + "/authService/nylas/hostedAuth"
exports.PROD_SWITCH = 1;