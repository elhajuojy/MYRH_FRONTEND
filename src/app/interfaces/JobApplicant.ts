import {EducationLevel} from "./EducationLevel.enums";

export interface JobApplicant{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    resume: string;
    cover_letter: string;
    created_at: string;
    updated_at: string;
    job_offer_id: number;
    user_id: number;
    job_offer_title: string;
    job_offer_description: string;
    job_offer_salary: number;
    job_offer_location: string;
    job_offer_type: string;
    job_offer_company: string;

}


export interface JobApplicationRequest{
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  education: string;
  experience: string;
  educationLevel: EducationLevel;
  resume: File;
  coverLetter: File;
  jobOfferId: number;
}

export interface JobApplicationResponse {
  id:number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  education: string;
  experience: string;
  educationLevel: EducationLevel;
  resume: File;
  coverLetter: File;
  jobOfferId: number;
}
