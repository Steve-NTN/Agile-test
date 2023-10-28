import { IS_VALID_STRING } from "./string";

type FieldType = {
  field: string;
  value?: string | number;
  type?: string;
};

const HANDLE_ERROR = (fields: FieldType[] = []) => {
  let tmpErrors: any = {};

  fields?.map((field: any) => {
    let isNotEmpty = IS_VALID_STRING(field?.value);

    switch (field?.type) {
      default: {
        tmpErrors[field?.field] = {
          show: !isNotEmpty,
          text: isNotEmpty ? "" : "Required",
        };

        return field;
      }
    }
  });
  return tmpErrors;
};

const CHECK_HAS_ERROR = (errors: any = {}) => {
  let exits = Object.keys(errors).find((error) => errors[error]?.show);
  return exits ? true : false;
};

export { HANDLE_ERROR, CHECK_HAS_ERROR };
