import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUser1585401820554 implements MigrationInterface {
    name = 'updateUser1585401820554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(30) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user` (`name`)", undefined);
    }

}
