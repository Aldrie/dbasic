declare module NodeJS {
  interface Global {
    dbasic: {
      path: string;
      minifyJson?: boolean;
      models: {
        [key: string] : {
          path: string;
        }
      };
    };
  }
}

declare interface TypeObject {
  _type: FieldTypes;
  _min?: number;
  _max?: number;
  _required?: boolean;
  _default?: any;
}
declare type FieldTypes = 'string' | 'number' | 'boolean' | [];
declare type TypeDefinition = TypeObject | FieldTypes;
declare interface ModelDefinition {
  [key: string]: TypeDefinition;
}
