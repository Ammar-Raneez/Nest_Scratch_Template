import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// gathers everything together
@Module({
  controllers: [AppController],
})
export class AppModule { }
