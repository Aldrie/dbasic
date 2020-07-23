import nodePath from 'path';
import { storeInModel, createStoreStructure } from '../store';
import { findInModel } from '../functions';

interface ModelReturn<T = ModelDefinition | any> {
  create: (fields: T) => T;
  find: (match: Object) => T[] | [];
}

// @ts-ignore
const Model = <T>(modelName: string, model: ModelDefinition): ModelReturn<T> => {
  const { path, models } = global.dbasic;
  const modelPath = nodePath.join(path, `${modelName}.json`);

  models[modelName] = { path: modelPath };

  createStoreStructure();

  return {
    create: (obj) => storeInModel<T>(modelPath, obj),
    find: (match) => findInModel<T>(modelPath, match),
  };
};

export default Model;
