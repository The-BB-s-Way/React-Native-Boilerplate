export interface UtenteDaRegistrare {
    Email: string
    Password: string
    Nome: string
    Cognome: string
    Lingua: string

    DataNascita?: string
    Paese?: string
    Provincia?: string
    Citta?: string
    Indirizzo?: string
    Cap?: string
    Telefono?: string
    CodiceFiscale?: string
}

export interface RegistrationResponse {
    status: UtRegResult
    id: number
}

export enum UtRegResult {
    Success = 1,
    UserNameInUse = 2,
    ErrorOnGroups = 3,
    ErrorOnUser = 4,
    ErrorUnknown = 5
}

export interface User {
    ID: number
    Username: string
    LastName: string
    FirstName: string
    Email: string
    Telefono: string
    Societa: string
    RegisterDate: string // DateTime
    CodiceAttivazione: string
    LastLogin: string // DateTime
    Abilitato: boolean
    UrlImmagine: string
    UrlImmagineCopertina: string

    Paese: string
    Provincia: string
    Citta: string
    Indirizzo: string
    Cap: string
    Fax: string

    IDOrigine: number
    IDImported: string

    SitoWeb: string
    PartitaIva: string
    CodiceFiscale: string
    Pec: string
    Sdi: string

    DataNascita: string // DateTime

    Password: string // Used to authenticate.
    HashedPassword: string

    AccountFlags: number
}

export interface AppUser {
    ID: number;
    Email: string;
    Name: string;
    Surname: string; 
    Language: string    
    CreatedAt: Date; 
    LastLogin: Date;
    Enabled: boolean;    
    Phone: string;    
    Company: string;  
    Country: string;    
    Province: string;    
    City: string;    
    ZIP: string;    
    Address: string;    
    Sdi: string;    
    TaxCode: string;   
    VatCode: string;   
    URLImage: string;    
    IsGoogle: boolean;
    IsFacebook: boolean;
    IsApple: boolean;
}

export interface RegisterRequest {
    Email: string
    Password: string

    FirstName: string
    LastName: string
    Telefono: string
    Societa: string
    Username: string
    IDOrigine: number
    CanBeActivated: boolean

    Codice: string

    Indirizzo: string
    Citta: string
    Cap: string
    Fax: string
    Paese: string
    Provincia: string

    DataNascita: string
    Sdi: string
    PartitaIva: string
    CodiceFiscale: string
    SitoWeb: string
    IDAzienda: number

    Virtuale: boolean
    Pec: string
}

export interface RegisterResponse {
    data: RegisterResponseSuccess
    error: RegisterResponseFailed
}

export interface RegisterResponseSuccess {
    code: string
    status: string
    data: AuthenticationPayload
}

export interface RegisterResponseFailed {
    code: string
    message: string
}

export interface AuthenticationPayload {
    user: User,
    payload: {
        type: string,
        token: string,
        refresh_token?: string
    }
}

export interface IRequestForgotPassword {
    email: string;
    idSistema: number | null;
}

export interface IResponseForgotPassword {
    success: boolean;
    error: any
}

export interface IRequestResetPassword {
    password: string,
    code: string
}

export interface IResponseResetPassword {
    success: boolean
}