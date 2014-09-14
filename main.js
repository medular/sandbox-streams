import { Observable } from 'rx';

export class Readable {

  static fromArray(array) {
    return new Readable(Observable.fromArray(array));
  }

  static fromEvent(target, eventName) {
    return new Readable(Observable.fromEvent(target, eventName));
  }

  static fromPromise(promise) {
    return new Readable(Observable.fromPromise(promise));
  }

  constructor(source) {
    this.source = source;
  }

  map(iterator) {
    return new Readable(this.source.map(iterator))
  },

  flatten() {
    return new Readable(this.source.flatMap(item => item));
  },

  subscribe(onNext, onError, onComplete) {
    return this.source.subscribe(onNext, onError, onComplete);
  }
}
