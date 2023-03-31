import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
@Injectable()
export class AppService {
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  getHello(): string {
    return 'Hello World!';
  }
}
