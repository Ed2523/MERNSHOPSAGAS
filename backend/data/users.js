import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('12345', 10),
        isTheUserAdmin: true
    },
    {
        name: 'User 1',
        email: 'userone@admin.com',
        password: bcrypt.hashSync('12345', 10)
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@admin.com',
        password: bcrypt.hashSync('12345', 10)
    }
]

export default users;