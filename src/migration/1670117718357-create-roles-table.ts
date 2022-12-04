import { MigrationInterface, QueryRunner } from "typeorm"

export class createRolesTable1670117718357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table roles (
            id serial primary key,
            name text not null unique
        );        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table roles;`)
    }

}
