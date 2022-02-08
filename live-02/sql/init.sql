CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IN NOT EXISTS "pdcrypto";



CREATE TABLE IF NOT EXISTS application_user(

    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY(uuid)
)

INSERT INTO application_user(username, password) VALUES ('adalberto', crypt('admin','my_salt'))