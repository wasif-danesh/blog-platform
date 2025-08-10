import { Controller, Get } from '@nestjs/common';
@Controller()
export class HealthController {
    @Get('/health') health() { return { ok: true }; }
    @Get('/version') version() { return { version: process.env.APP_VERSION ?? '0.1.0' }; }
}
