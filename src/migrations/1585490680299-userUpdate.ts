import {MigrationInterface, QueryRunner} from "typeorm";

export class userUpdate1585490680299 implements MigrationInterface {
    name = 'userUpdate1585490680299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_638bac731294171648258260ff` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(250) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` enum ('ALUNO', 'PROFESSOR', 'ADMINISTRADOR', 'CHEFE') NOT NULL DEFAULT 'ALUNO'", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_638bac731294171648258260ff` (`password`)", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` enum ('ALUNO', 'PROFESSOR', 'ADMINISTRADOR', 'CHEFE') NOT NULL DEFAULT 'ALUNO'", undefined);
        await queryRunner.query("DROP INDEX `IDX_638bac731294171648258260ff` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(30) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_638bac731294171648258260ff` ON `user` (`password`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_638bac731294171648258260ff` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(250) NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_638bac731294171648258260ff` ON `user` (`password`)", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` enum ('ALUNO', 'PROFESSOR', 'ADMINISTRADOR') NOT NULL DEFAULT 'ALUNO'", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_638bac731294171648258260ff`", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `role` `role` enum ('ALUNO', 'PROFESSOR', 'ADMINISTRADOR') NOT NULL DEFAULT 'ALUNO'", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `weigth` `weigth` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `height` `height` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(30) NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_638bac731294171648258260ff` ON `user` (`password`)", undefined);
    }

}
