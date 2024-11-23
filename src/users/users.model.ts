import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface IUserCreationAttrs{
  email:string
  password:string
}
@Table({tableName:'users'})
export class User extends Model<User,IUserCreationAttrs>{

  @ApiProperty({example:1,description:'Ункиальный идентификатор'})
  @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

  @ApiProperty({example:'test@mail.ru',description:'Электронная почта'})
  @Column({type:DataType.STRING,unique:true,allowNull:false})
    email:string;

  @ApiProperty({example:'qwerty123',description:'Пароль'})
  @Column({type:DataType.STRING,allowNull:false})
    password:string;

  @ApiProperty({example:true,description:'Забанен пользователь или нет'})
  @Column({type:DataType.BOOLEAN,defaultValue:false})
    banned:boolean;
  @BelongsToMany(()=>Role,()=>UserRoles )
  roles:Role[];

}