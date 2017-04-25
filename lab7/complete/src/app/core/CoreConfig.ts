import { ExtHttpConfig } from './ExtHttpConfig';

export interface CoreConfigInterface {
  extHttpConfig: ExtHttpConfig;
}

export class CoreConfig {
  extHttpConfig: ExtHttpConfig;

  constructor(extHttpConfig: ExtHttpConfig) {
    this.extHttpConfig = extHttpConfig;
  }
}
