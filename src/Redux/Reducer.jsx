import { InitState, Inpstate } from "./State";
import { FORM, INP_VAL } from "./Type";

export const Reducer = (state = InitState, action) => {
  switch (action.type) {
    case FORM:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    default:
      return state;
  }
};
export const InpReducer=(state = Inpstate,action)=>{
    switch(action.type){
      case INP_VAL:
        return{
          // ...state,
          carditem: [action.payload]
        }
        default:{
          return state
        }
    }
    
}