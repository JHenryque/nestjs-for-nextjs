import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString({ message: 'Senha precisa ser uma sting' })
  @IsNotEmpty({ message: 'Senha nao pode estar fazia' })
  password: string;

  // @IsNotEmpty({ message: 'Test nao pode estar fazia' })
  // @Type(() => Number)
  // test: number;
}
