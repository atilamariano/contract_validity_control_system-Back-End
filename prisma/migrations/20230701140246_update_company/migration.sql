-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `corporateName` VARCHAR(191) NOT NULL,
    `fantasyName` VARCHAR(191) NOT NULL,
    `contactPerson` VARCHAR(191) NOT NULL,
    `contactPhone` VARCHAR(191) NOT NULL,
    `contactEmail` VARCHAR(191) NOT NULL,
    `inclusionDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('ACTIVE', 'INATIVE') NOT NULL,
    `municipalRegistration` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `companies_cnpj_key`(`cnpj`),
    UNIQUE INDEX `companies_corporateName_key`(`corporateName`),
    UNIQUE INDEX `companies_contactEmail_key`(`contactEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
