module.exports = {
    token: {
        kind: 'jwt',
        options: {
            issuer: 'lasso',
            algorithm : 'RS256',
            secret: 'ssshhh'   // can replace with publicKey, privateKey properties
        }
    }
};