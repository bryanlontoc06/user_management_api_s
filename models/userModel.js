module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        contact_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['username']
            }
        ],
        timestamps: true,
    })


    return User
}