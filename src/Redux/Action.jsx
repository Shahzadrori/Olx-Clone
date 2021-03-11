import { FORM, INP_VAL } from "./Type";

export const Allow = (Data) => {
  return {
    type: FORM,
    payload: Data,
  };
};

export const Search =(info)=>{
  return{
    type:INP_VAL,
    payload:info
  }
}