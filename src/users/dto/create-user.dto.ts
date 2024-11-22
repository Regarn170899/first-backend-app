import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

  @ApiProperty({example:'test@mail.ru',description:'Электронная почта'})
  readonly email:string;

  @ApiProperty({example:'qwerty123',description:'Пароль'})
  readonly password:string;
}