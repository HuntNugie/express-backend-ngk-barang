-- CreateTable
CREATE TABLE `Barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_barang` VARCHAR(191) NOT NULL,
    `stok_barang` INTEGER NOT NULL,
    `harga` DOUBLE NOT NULL,
    `foto` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
