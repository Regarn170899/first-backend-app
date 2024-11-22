import { BelongsTo, BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";

interface IRoleCreationAttrs{
  value:string
}
@Table({tableName:'roles'})
export class Role extends Model<Role,IRoleCreationAttrs>{

  @ApiProperty({example:1,description:'Ункиальный идентификатор'})
  @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

  @ApiProperty({example:'admin',description:'Роль пользователя'})
  @Column({type:DataType.STRING,unique:true,allowNull:false})
    value:string;

}