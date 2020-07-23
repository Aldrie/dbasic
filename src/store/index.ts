import fs from 'fs';

interface StoreModel<T = any> {
  data: T[];
}

export const loadModel = <T>(path: string): T[] => {
  if (fs.existsSync(path)) {
    const fileData = fs.readFileSync(path, { encoding: 'utf-8' });
    const { data }: StoreModel<T> = JSON.parse(fileData);

    try {
      return data;
    } catch (err) {
      throw new Error(`JSON error in: ${path}`);
    }
  }

  return [];
};

const saveData = (modelPath: string, data: any) => {
  const { minifyJson } = global.dbasic;
  const defaultObject: StoreModel = {
    data,
  };

  const JsonData = !minifyJson
    ? JSON.stringify(defaultObject, null, 2)
    : JSON.stringify(defaultObject);

  fs.writeFileSync(modelPath, JsonData, { encoding: 'utf-8' });
};

export const storeInModel = <T>(modelPath: string, value: T): T => {
  const modelData = loadModel<T>(modelPath);
  modelData.push(value);
  saveData(modelPath, modelData);
  return value;
};

export const createStoreStructure = () => {
  const { path, models } = global.dbasic;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  if (models) {
    Object.keys(models).forEach((name) => {
      const jsonPath = models[name].path;
      if (!fs.existsSync(jsonPath)) {
        saveData(jsonPath, []);
      }
    });
  }
};
