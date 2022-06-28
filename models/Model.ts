import { AxiosPromise, AxiosResponse } from 'axios';
interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T,
  set(data: T): void;
}

interface Sync<T> {
  save(data: T): AxiosPromise;
  fetch(id: number ): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>, 
    private sync: Sync<T>, 
    private events: Events, 
  ) {}

  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  set(value: T): void {
    this.attributes.set(value);
    this.events.trigger('change');
  }

  get get() {
    return this.attributes.get;
  }

  fetch() {
    const id = this.get('id');

    if(typeof id !== 'number') {
      throw new Error('Cannot fetch with id');
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    })
  }

  save(data: T): void {
    this.sync.save(data).then((response: AxiosResponse) => {
      this.set(response.data);
      this.events.trigger('saved');
    }).catch(() => {
      this.events.trigger('error')
    })
  }
}