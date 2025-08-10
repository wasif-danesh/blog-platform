import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefix all routes with /api
  app.setGlobalPrefix('api');

  const config = app.get(ConfigService);

  // CORS: allow Vercel preview + local + any extra origins via env
  const extraOrigins = (config.get<string>('CORS_ORIGINS') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  app.enableCors({
    origin: [
      /https:\/\/.*-.*-.*\.vercel\.app$/, // Vercel previews
      'http://localhost:3000',
      ...extraOrigins,
    ],
    credentials: true,
  });

  const port = Number(process.env.PORT ?? '3001');
  await app.listen(port, '0.0.0.0');
}
bootstrap();
