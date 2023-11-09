CREATE TABLE `user_to_conversions` (
	`user_id` text NOT NULL,
	`conversions_id` integer NOT NULL,
	PRIMARY KEY(`conversions_id`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`conversions_id`) REFERENCES `conversions`(`id`) ON UPDATE no action ON DELETE no action
);
