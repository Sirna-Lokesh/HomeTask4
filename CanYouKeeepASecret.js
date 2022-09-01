function createSecretHolder(secret) {
    function getSecret() {
        return secret;
    }
    function setSecret(x) {
        secret = x;
    }
    return {
        setSecret, getSecret
    };
}