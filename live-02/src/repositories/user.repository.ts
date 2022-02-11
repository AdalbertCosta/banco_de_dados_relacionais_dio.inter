import db from '../db'
import User from '../models/user.models'

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `SELECT uuid, username 
        FROM application_user
        `

    const { rows } = await db.query<User>(query)
    return rows || []
  }

  async findById(uuid: string): Promise<User> {
    const query = `
                SELECT uuid, usernames, email
                FROM application_user
                WHERE uuid - $1
                `

    const values = { uudi }

    const { row } = await db.query<User>(query, values)
    const [user] = rows

    return User
  }

  async create(user: User): Promise<string> {
      const script = `
      INSERT INTO application_user (
        username,
        password
        )
        VALUES ($1, crypt($2,'my_salt'))
        RETURNIG uuid
      `;

      const values = [user.username, user.password];
      const {rows} = await db.query<{uuid: string}>(script, values);
      const [newUser] = rows;
      const newUseer.uuid;
  }
}
export default new UserRepository();
