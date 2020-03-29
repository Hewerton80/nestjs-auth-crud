import {MigrationInterface, QueryRunner} from "typeorm";

export class userUpdate1585485697974 implements MigrationInterface {
    name = 'userUpdate1585485697974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `email` varchar(30) NOT NULL, `name` varchar(30) NOT NULL, `password` varchar(250) NOT NULL, `height` float(5) NOT NULL, `weigth` float(5) NOT NULL, `role` enum ('ALUNO', 'PROFESSOR', 'ADMINISTRADOR') NOT NULL DEFAULT 'ALUNO', `actived` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(250) NOT NULL", undefined);
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
