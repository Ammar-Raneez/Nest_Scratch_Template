import { Controller, Get } from "@nestjs/common";

// class gonna serve as a controller
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return 'hi there';
  }
}