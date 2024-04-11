"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (errors) => {
            const messages = errors.map((error) => ({
                field: error.property,
                message: Object.values(error.constraints).join('. ') + '.',
            }));
            return new common_1.BadRequestException({ errors: messages });
        },
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map