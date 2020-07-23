import Model from './model';

interface IConfigureProps {
  path: string;
  minifyJson?: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const configure = ({ path, minifyJson }: IConfigureProps): void => {
  global.dbasic = {
    path,
    models: {},
    minifyJson,
  };
};

export {
  Model,
};
