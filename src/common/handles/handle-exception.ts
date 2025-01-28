import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export class ExceptionHandler {
  static handle(error: any): void {
    switch (error.code) {
      case 11000:
        throw new BadRequestException('Pokemon already exists in database');
      default:
        throw new InternalServerErrorException('Internal server error');
    }
  }
}
