import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// run on init
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();