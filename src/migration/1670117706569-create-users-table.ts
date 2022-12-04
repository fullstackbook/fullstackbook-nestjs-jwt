import { MigrationInterface, QueryRunner } from "typeorm"

export class createUsersTable1670117706569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table users (
            id serial primary key,
            username text not null,
            password text
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table users;`)
    }

}
