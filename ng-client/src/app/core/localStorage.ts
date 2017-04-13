import { Injectable } from '@angular/core';

export interface StorageBackend {
  getItem(key: string): any;
  setItem(key: string, value: any): any;
  removeItem(key: string): any;
}

export const AUTH_TOKEN_NAME = 'id_token';

@Injectable()
export class LocalStorage {
  storageBackend: StorageBackend;

  getItem(key): any {
    if (this.storageBackend) {
      return this.storageBackend.getItem(key);
    } else {
      return '';
    }
  }

  setItem(key, value): any {
    if (this.storageBackend) {
      return this.storageBackend.setItem(key, value);
    } else {
      return '';
    }
  }

  removeItem(key): any {
    if (this.storageBackend) {
      return this.storageBackend.removeItem(key);
    } else {
      return '';
    }
  }

  // Init storage by DOM object outside of server rendering
  initStorage(storageBackend: StorageBackend): void {
    this.storageBackend = storageBackend;
  }
}
