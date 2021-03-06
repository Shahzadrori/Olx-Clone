import { InitState } from "./State";
import { FORM } from "./Type";

export const Reducer = (state = InitState, action) => {
  switch (action.type) {
    case FORM:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
  }
};
