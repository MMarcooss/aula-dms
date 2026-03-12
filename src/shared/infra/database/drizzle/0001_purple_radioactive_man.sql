CREATE TABLE "teachers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"department" text NOT NULL,
	"birth_date" timestamp with time zone NOT NULL,
	"nationality" varchar(100) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"marital_status" varchar(20) NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL,
	CONSTRAINT "teachers_email_unique" UNIQUE("email")
);
