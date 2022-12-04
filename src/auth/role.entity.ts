import { ERole } from "src/auth/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "enum",
    enum: ERole
  })
  name: string
}