import jwt_decode from "jwt-decode";

// function extractPayloadFromJWT(token: string): { [key: string]: any } | null {
//   const [, payloadEncoded] = token.split('.');

//   if (!payloadEncoded) {
//     console.error('Invalid JWT format');
//     return null;
//   }

//   try {
//     const payload = JSON.parse(atob(payloadEncoded));
//     return payload;
//   } catch (error) {
//     console.error('Error decoding JWT payload:', error);
//     return null;
//   }
// }

export class AuthUtils {
  constructor() {
  }

  static isTokenExpired(token: string): boolean {
    const decodedToken: any = jwt_decode(token);
    const now = new Date();
    const exp = new Date(decodedToken.exp * 1000);
    if (now > exp) {
      return true;
    }
    return false;
  }

  static isTokenValid(token: string): boolean {
    const decodedToken: any = jwt_decode(token);
    const now = new Date();
    const exp = new Date(decodedToken.exp * 1000);

    if (now < exp) {
      return true;
    }
    return false;
  }


}