import db from "../db";
import User from "../models/user.models";


class UserRepository {

    async findAllUsers(): Promise<User[]> {
        const query = `SELECT uuid, username 
        FROM application_user
        `;

        const {rows} = await db.query<User>(query);
        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        const query = `
                SELECT uuid, usernames, email
                FROM application_user
                WHERE uuid - $1
                `;

                const values = {uudi};

                const {row} = await db.query<User>(query, values);
                const [user] = rows;

                return User;
        
        
    }
}

export default new UserRepository();