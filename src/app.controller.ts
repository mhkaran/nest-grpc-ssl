import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { input,output } from '../proto/build/helloWorld';

@Controller()
export class HelloWorldService {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('HelloWorldService','getHello')
  getHello(input:input): output {
    let out:output={fullName:`hello world from ${input.name}!`};
    return out;
  }
}
