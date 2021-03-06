import { FORM } from "./Type";

export const Allow = (Data) => {
  return {
    type: FORM,
    payload: Data,
  };
};

