const sequelize = require('../db')
const {DataTypes, INTEGER} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketEquipment = sequelize.define('basket_equipment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Equipment = sequelize.define('equipment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const EquipmentInfo = sequelize.define('equipment_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketEquipment)
BasketEquipment.belongsTo(Basket)

Type.hasMany(Equipment)
Equipment.belongsTo(Type)

Brand.hasMany(Equipment)
Equipment.belongsTo(Brand)

Equipment.hasMany(BasketEquipment)
BasketEquipment.belongsTo(Equipment)

Equipment.hasMany(EquipmentInfo, {as: 'info'});
EquipmentInfo.belongsTo(Equipment)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })

module.exports = {
    User,
    Basket,
    BasketEquipment,
    Equipment,
    Type,
    Brand,
    TypeBrand,
    EquipmentInfo
}