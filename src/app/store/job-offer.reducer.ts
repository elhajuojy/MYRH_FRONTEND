import {createReducer} from "@ngrx/store";
import {JobOfferResponse} from "../interfaces/jobOffer.model";

const initialState:JobOfferResponse[] = [];

export const jobOfferReducer = createReducer(
    initialState
);
