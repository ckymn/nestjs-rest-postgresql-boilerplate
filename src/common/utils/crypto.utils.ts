import * as cryptoJs from 'crypto-js';

export const passwordToHash = (password: string) => {
  return cryptoJs.HmacSHA256(
    password,
    cryptoJs.HmacSHA1(password, process.env.SALT).toString(),
  );
};
