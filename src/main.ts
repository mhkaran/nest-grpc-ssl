import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import * as grpc from 'grpc'
import {readFileSync} from 'fs';

const microservicesoptions: NestMicroserviceOptions & MicroserviceOptions =
  {
    transport: Transport.GRPC,
    options: {
      // url: 'http://localhost:6379',
      url: 'localhost:50051',
      protoPath: 'proto/helloWorld.proto',
      package: 'helloWorld',
    //   credentials: grpc.ServerCredentials.createSsl(readFileSync('certs/ca.crt'),[{private_key:readFileSync('certs/server.key'),cert_chain
    // :readFileSync('certs/server.crt')}],true)
    }
  }

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesoptions)
  
  app.listen(()=>{console.log('gRPC service started!')});  

};

bootstrap();
  
