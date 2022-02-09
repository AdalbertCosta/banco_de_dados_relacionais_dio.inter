import {Pool} from 'pg';

const connectionString = 'postgres://bhgsulqh:4fQZHXf54qKF5FyDrtAD3BIJae7_UERe@tyke.db.elephantsql.com/bhgsulqh';

const db = new Pool ({connectionString});

export default db;

