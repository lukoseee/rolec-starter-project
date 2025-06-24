CREATE TABLE `testing` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`product_name` text(256),
	`image` text,
	`kind` text(1024),
	`description` text,
	`materials` text,
	`enclosure_dimensions` text,
	`charge_protocol` text,
	`input_voltage` text,
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `testing` (`product_name`);--> statement-breakpoint
CREATE TABLE `secondtable` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`testing` text
);
