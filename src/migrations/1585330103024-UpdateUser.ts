import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUser1585330103024 implements MigrationInterface {
    name = 'UpdateUser1585330103024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `weigth` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `weigth`", undefined);
    }

}
