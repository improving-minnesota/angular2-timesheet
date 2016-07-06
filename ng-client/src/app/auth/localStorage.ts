import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface StorageBackend {
  getItem(key: string): any;
  setItem(key: string, value: any): any;
  removeItem(key: string): any;
}

@Injectable()
export class LocalStorage {
  storageBackend: StorageBackend;

  getItem(key):Observable<any> {
    if (this.storageBackend) {
      return Observable.create((observer) => {
        observer.next(this.storageBackend.getItem(key));
      });
    } else {
      return Observable.create((observer) => {
        observer.next('');
      });
    }
  }

  setItem(key, value):Observable<any> {
    if (this.storageBackend) {
      return Observable.create((observer) => {
        observer.next(this.storageBackend.setItem(key, value));
      });
    } else {
      return Observable.create((observer) => {
        observer.next('');
      });
    }
  }

  removeItem(key):Observable<any> {
    if (this.storageBackend) {
      return Observable.create((observer) => {
        observer.next(this.storageBackend.removeItem(key));
      });
    } else {
      return Observable.create((observer) => {
        observer.next('');
      });
    }
  }



  // Init storage by DOM object outside of server rendering
  initStorage(storageBackend: StorageBackend):void {
    this.storageBackend = storageBackend;
  }
}
