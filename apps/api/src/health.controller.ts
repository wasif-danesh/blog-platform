import { Controller, Get } from '@nestjs/common';
@Controller()
export class HealthController {
  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }

  @Get('/version')
  version() {
    return { version: process.env.APP_VERSION ?? '0.1.0' };
  }
}
