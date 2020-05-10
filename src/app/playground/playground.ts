import {Endpoint} from './endpoint';

export interface Playground {

  name: string;
  description: string;
  endpoints: Endpoint[];
}
