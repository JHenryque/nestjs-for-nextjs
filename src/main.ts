import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove fields that are not in the dto
      forbidNonWhitelisted: true, // throw an error if a field is not in the dto
      // transform: true, // transform the data to the type of the dto
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
