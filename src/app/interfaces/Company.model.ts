export  interface CompanyRequest{
  name: string;
  address: string;
  login: string;
  phoneNumber: string;
  password: string;
  email: string;
  website: string;
  description: string;
  image: File;
}


export interface CompanyResponse{
  id: number;
  name: string;
  address: string;
  login: string;
  phoneNumber: string;
  email: string;
  website: string;
  description: string;
  image: string;
}

export interface CompanyRequestAuth{
  login:string;
  password:string
}
