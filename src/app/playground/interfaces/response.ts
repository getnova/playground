export interface Response {
  info: {
    tag: string,
    status: {
      code: number,
      name: string,
      error: boolean
    },
    message: string
  };
  data: any;
}
