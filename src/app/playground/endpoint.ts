export interface Endpoint {

  name: string;
  description: string;
  parameters: { name: string, type: string, optional: boolean, description: string }[];
}
