import {MigrationInterface, QueryRunner} from "typeorm";

export class userUpdate1585483631432 implements MigrationInterface {
    name = 'userUpdate1585483631432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(250) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(30) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(250) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(30) NOT NULL", undefined);
    }

}
