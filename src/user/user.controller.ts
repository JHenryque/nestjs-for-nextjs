import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipes';

@Controller('user')
export class UserController {
  constructor(private readonly configService: ConfigService) {}

  @Get(':id')
  findOne(
    @Param('id', CustomParseIntPipe)
    id: number,
  ) {
    console.log(this.configService.getOrThrow('TESTE1', 'Padrao'));
    console.log(process.env.TESTE1 || 'Padrao1');
    return `Olá do controller do user #${id}`;
  }
}
