
class Auth{
    constructor(){
        this.authenticated = false;
    }
}

function loginAuth(cb) {
this.authenticated = true;
cb();
}

function isAuthenticated(){
    return this.authenticated;
}

export default new Auth();