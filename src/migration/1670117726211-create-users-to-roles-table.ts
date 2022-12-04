import { MigrationInterface, QueryRunner } from "typeorm"

export class createUsersToRolesTable1670117726211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table users_to_roles (
            user_id int references users (id),
            role_id int references roles (id)
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table users_to_roles;`)
    }

}
