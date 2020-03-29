import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUser1585332192272 implements MigrationInterface {
    name = 'updateUser1585332192272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `weigth`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `weigth` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `role` enum ('ALUNO', 'PROFESSOR', 'ADMINISTRADOR') NOT NULL DEFAULT 'ALUNO'", undefined);
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(30) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `height`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `height` float(5) NOT NULL", undefined);
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `height`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `height` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `height`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `height` float(5) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(30) NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user` (`email`)", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `height`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `height` int(11) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user` (`email`)", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `role`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `weigth`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `weigth` int(11) NOT NULL", undefined);
    }

}
