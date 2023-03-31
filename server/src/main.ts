import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = 9000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Hello world')
    .setDescription('The hello world description')
    .setVersion('1.0')
    .addTag('hi')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(port);
  console.log(`app running on : http://localhost:${port}`);
}
bootstrap();
