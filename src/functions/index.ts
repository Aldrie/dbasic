import { loadModel } from '../store';

const validateField = (type: string, value: any) => typeof value === type;

export const validateCreate = (model: ModelDefinition, createObject: any): void => {
  Object.keys(model).forEach((key) => {
    const field: TypeDefinition = model[key];
    const type = field;

    const value = createObject[key];

    if (!validateField(type, value)) {
      throw new Error(`Type error in dbasic: Expected ${field}: ${type} And received: ${typeof value}(${value})`);
    }
  });
};

export const findInModel = <T>(modelPath: string, match: Object): T[] | [] => {
  const model = loadModel<T>(modelPath);
  console.log(match);
  return model;
};

export const findByIdInModel = <T>(modelPath: string, id: string): T[] | [] => {
  const model = loadModel<T>(modelPath);
  console.log(id);
  return model;
};
