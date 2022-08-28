"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordToHash = void 0;
const cryptoJs = require("crypto-js");
const passwordToHash = (password) => {
    return cryptoJs.HmacSHA256(password, cryptoJs.HmacSHA1(password, process.env.SALT).toString());
};
exports.passwordToHash = passwordToHash;
//# sourceMappingURL=crypto.utils.js.map