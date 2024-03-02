const CryptoJS = require('crypto-js');
const passKey = process.env.CRYPTO_KEY;

const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, passKey).toString();
}

const decryptPassword = (encryptedPassword) => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, passKey);
    return bytes.toString(CryptoJS.enc.Utf8)

}

const comparePasswords = (plainPassword, encryptedPassword) => {
    return plainPassword === decryptPassword(encryptedPassword)
}


module.exports = {
    encryptPassword,
    comparePasswords,
}