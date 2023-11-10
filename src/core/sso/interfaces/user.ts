export interface User {
    ID?: number;
    Email: string;
    Name: string;
    Surname: string;
    Language: string;
    EntryDate: string;
    LastLogin: string;
    Enabled: boolean;
    Phone?: string;
    Company?: string;
    Country?: string;
    Province?: string;
    City?: string;
    ZIP?: string;
    Address?: string;
    Sdi?: string;
    TaxCode?: string;
    VatCode?: string;
    URLImage?: string;
}