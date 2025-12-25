const {validateToken} = require("../service/authentication");

function checkForAuthenticationCookie(cookieName){
    return function(req,res,next){
        const TokenCookieValue = req.cookies[cookieName];
        if(!TokenCookieValue){
            return next();
        }

        try{
            const userPayload = validateToken(TokenCookieValue);
            req.user = userPayload;
            //next();
        }catch(error){
            //next():
        }
        return next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}

/*If the token is invalid, 
the user will not be able to sign in successfully
because the token is essential for authenticating 
the user's identity in subsequent requests. 
When a user signs in, a valid token is generated 
and sent to the client, which the client must include in 
future requests (via headers or cookies). 
The server then verifies this token on each request 
to ensure the user is authenticated.*/