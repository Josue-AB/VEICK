const alexaCookie = require('alexa-cookie2');

alexaCookie.generateAlexaCookie('TU_EMAIL', 'TU_PASSWORD', {
    logger: console.log,
    acceptLanguage: 'es-ES'
}, (err, result) => {
    if (err) {
        console.log("ERROR:", err);
        return;
    }

    console.log("COOKIE:", result.cookie);
    console.log("CSRF:", result.csrf);
});