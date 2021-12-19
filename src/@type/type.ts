import { ListConstants } from "../Redux/List/constant";


export interface MyFormValues {
    jobTitle: string,
    jobField: string,
    jobLocation: string,
    startDate: string,
    endDate: string,
    description: string,
    companyName: string,
    companyAddress: string,
    currentlyWork: boolean,
    companyIndustry: string,
    companySize: string,
    companySector: string,
    reasonOfLeaving: string,
    numberEmployees: string,
    id: string,
}

export interface workExperienceArrays {
    workExperienceArray: MyFormValues[]
}


export interface IState {
    ListById: MyFormValues[],
    list: MyFormValues[],
    error: string,
    isEditings: boolean,
}

export interface AddItemAction {
    type: ListConstants.ADD_ITEM;
    payload: MyFormValues;
}

export interface DeleteItemAction {
    type: ListConstants.DELETE_ITEM;
    payload: string;
}

export interface GetItemByIdAction {
    type: ListConstants.GET_ITEM_BY_ID;
    payload: string;
}

export interface EditItemByIdAction {
    type: ListConstants.EDIT_ITEM;
    payload: MyFormValues;
}

export type ActionsType =
    | AddItemAction
    | DeleteItemAction
    | GetItemByIdAction
    | EditItemByIdAction


export type AllListActions = ActionsType;