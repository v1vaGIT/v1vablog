const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { drop } = require('../db')


const token = sequelize.define('Token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    token: {type: DataTypes.STRING, unique: true},
    //user: {type: DataTypes.INTEGER},
    creation_date: {type: DataTypes.TIME}
})

const user = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    //users_info: {type: DataTypes.INTEGER},
    registration_date: {type: DataTypes.DATE},
    email: {type: DataTypes.STRING}
})

const user_info = sequelize.define('User_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    birthday: {type: DataTypes.DATE},
    //gender: {type: DataTypes.INTEGER}
    name: {type: DataTypes.STRING, allowNull: true},
    surname: {type: DataTypes.STRING, allowNull: true},
    phone: {type: DataTypes.STRING, allowNull: true}
})

const gender = sequelize.define('Gender', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    gender_name: {type: DataTypes.STRING}
})

const news = sequelize.define('News', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   // user_id: {type: DataTypes.STRING, unique:true}
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true},
})

const comment = sequelize.define('Comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //news_id: {type: DataTypes.INTEGER,},
    text: {type: DataTypes.STRING,allowNull: false},
    
})

user.hasOne(token)
token.belongsTo(user)

//news.hasOne(user);
//user.belongsTo(news)

user.hasMany(news);
news.belongsTo(user, {as : 'Author'})

user.hasOne(user_info)
user_info.belongsTo(user)

user_info.belongsTo(gender)

news.hasMany(comment)
comment.belongsTo(news)


comment.hasMany(comment);
comment.belongsTo(comment)

module.exports = {
    user,
    user_info,
    token,
    gender,
    news,
    comment
}

sequelize.sync({alter: false}) 