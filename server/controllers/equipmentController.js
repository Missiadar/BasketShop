const uuid = require('uuid')
const path = require('path')
const {Equipment} = require('../models/models')
const ApiError = require('../error/ApiError');

class EquipmentController {
    async create(req, res, next){
        try{
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const equipment = await Equipment.create({name, price, brandId, typeId, img: fileName})

            return res.json(equipment)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){

    }

    async getOne(req, res){

    }
}

module.exports = new EquipmentController()