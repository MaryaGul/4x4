import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule, { cors: true })

    const config = new DocumentBuilder()
        .setTitle('Курсовая работа')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('#politech')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.log('Server started on port =', PORT))
    app.useGlobalPipes(new ValidationPipe())
}

start()