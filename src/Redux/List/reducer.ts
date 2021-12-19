
import {
  ActionsType,
  IState,
} from "../../@type/type";
import { ListConstants } from "./constant";
export const listReducer =
  (
    initialState: IState = {
      ListById: [],
      list: [],
      error: "",
      isEditings: false,
    },
    action: ActionsType
  ): IState => {
    switch (action.type) {
      case ListConstants.ADD_ITEM:
        return {
          ...initialState,
          isEditings: false,
          ListById: [],
          list: [action.payload, ...initialState.list],
        };

      case ListConstants.DELETE_ITEM:
        return {
          ...initialState,
          isEditings: false,
          ListById: [],
          list: initialState.list.filter(
            (elemnt) => elemnt.id !== action.payload
          ),
        };
      case ListConstants.GET_ITEM_BY_ID:
        return {
          ...initialState,
          isEditings: true,
          ListById: initialState.list.filter(
            (elemnt) => elemnt.id === action.payload
          ),
        };
      case ListConstants.EDIT_ITEM:

        let upDateItem = initialState.list.filter(
          (item) => item.id !== action.payload.id
        )

        return {
          ...initialState,
          isEditings: !initialState.isEditings,
          list: upDateItem.concat(action.payload),
        }

      default:
        return initialState;
    }
  };
