export interface ExtHttpConfigArgs {
  url: string;
}

export class ExtHttpConfig {
  url: string;

  constructor(config: ExtHttpConfigArgs) {
    this.url = config.url;
  }
}
