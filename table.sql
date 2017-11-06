-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    "userId" integer NOT NULL,
    "firstName" character(50) COLLATE pg_catalog."default",
    "lastName" character(50) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY ("userId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to postgres;