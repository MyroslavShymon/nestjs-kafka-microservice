import {Controller, Get, Inject, OnModuleInit} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientKafka, EventPattern} from "@nestjs/microservices";
import {OrderCreatedEvent} from "./events/order-created.event";

@Controller()
export class AppController implements OnModuleInit {
  constructor(
      private readonly appService: AppService,
      @Inject('AUTH_SERVICE')
      private readonly authClient: ClientKafka
  ) {}

  ///!!!!!!!!!!!!!!!!!!!!!!!!!
  async onModuleInit(): Promise<void> {
    this.authClient.subscribeToResponseOf('get_user');
    await this.authClient.connect();
  }

  @EventPattern('order_created')
  handleOrderCreated(orderCreated: OrderCreatedEvent) {
    this.appService.handleOrderCreated(orderCreated);
  }
}
