export interface input {
    name: string;
  }
  
  export interface output {
    fullName: string;
  }
  
  export interface IHelloWorldService {
  
    getHello(request: input): Promise<output>;
  
  }