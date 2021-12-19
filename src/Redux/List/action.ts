import { ListConstants } from "./constant";
import {
  ActionsType,
  MyFormValues,
} from "../../@type/type";


export const addItem = (payload: MyFormValues): ActionsType => {
  return {
    type: ListConstants.ADD_ITEM,
    payload,
  };
};

export const deleteItem = (payload: string): ActionsType => {
  return {
    type: ListConstants.DELETE_ITEM,
    payload,
  };
};

export const getItemById = (payload: string): ActionsType => {
  return {
    type: ListConstants.GET_ITEM_BY_ID,
    payload,
  };
};

export const EditItemById = (payload: MyFormValues): ActionsType => {
  return {
    type: ListConstants.EDIT_ITEM,
    payload,
  };
};