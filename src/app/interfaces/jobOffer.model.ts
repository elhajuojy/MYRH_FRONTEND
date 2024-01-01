import {Contract} from "./Contract.enum";

export interface JobOfferModel {
    id: number;
    title: string;
    description: string;
    salary: number;
    location: string;
    type: string;
    company: string;
    company_id: number;
    created_at: string;
    updated_at: string;
    user_id: number;
    company_name: string;
    company_logo: string;
    company_description: string;
    company_website: string;
    company_address: string;
    company_email: string;
    company_phone: string;
}

export  interface JobOfferResponse{
  id: number;
  title: string;
  description: string;
  salary: number;
  location: string;
  contract: Contract;
  education: string;
}

export interface JobOfferApplicationsPageResponse{
  id: string
  fullName: string
  email: string
  phoneNumber: any
  cvUrl: any
}

export interface JobOfferRequest{
  title: string;
  description: string;
  salary: number;
  location: string;
  contract: Contract;
  education: string;
}


//
// export interface JobOfferChangeVisibilityRequest {
//    jobOfferId:string;
//   visibility:boolean;
// }

export class JobOfferChangeVisibilityRequest{
    jobOfferId:string;
    visibility:boolean;
  constructor(jobOfferId: string, visibility: boolean) {
    this.jobOfferId = jobOfferId;
    this.visibility = visibility;
  }
}


export interface JobOfferPageResponse {
  content: JobOfferResponse[]
  pageable: Pageable
  last: boolean
  totalElements: number
  totalPages: number
  first: boolean
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  empty: boolean
}


export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}

export interface Sort2 {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}

