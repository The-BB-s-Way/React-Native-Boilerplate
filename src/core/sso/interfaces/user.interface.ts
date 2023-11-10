export interface AuthUser {
    ID: number;
    Email: string;
    Name: string;
    Surname: string;
    Language: string;
    EntryDate: Date;
    LastLogin: Date;
    Enabled: boolean;
    Phone: string | null;
    Company: string | null;
    Country: string | null;
    Province: string | null;
    City: string | null;
    ZIP: string | null;
    Address: string | null;
    Addresses: RecentAddress[];
    Sdi: string | null;
    TaxCode: string | null;
    VatCode: string | null;
    UrlImage: string | null;
}   

export interface RecentAddress {
    ID: number;
    Address: string;
}