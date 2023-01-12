import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";
import {GetUserRequestDto} from "./dto/get-user-request.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(user: GetUserRequestDto) {
    console.log("user", user)

    return this.appService.getUser(user);
  }
}
