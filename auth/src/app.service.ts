import { Injectable } from '@nestjs/common';
import {GetUserRequestDto} from "./dto/get-user-request.dto";

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '4356'
    },
    {
      userId: '234',
      stripeUserId: '454'
    },
    {
      userId: '345',
      stripeUserId: '6577'
    },
    {
      userId: '456',
      stripeUserId: '6746'
    },
    {
      userId: '567',
      stripeUserId: '5646'
    },
    {
      userId: '678',
      stripeUserId: '7567'
    },
    {
      userId: '789',
      stripeUserId: '5467'
    },
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequestDto: GetUserRequestDto) {
    return this.users.find((user) => user.userId == getUserRequestDto.userId)
  }
}
