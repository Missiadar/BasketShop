const uuid = require('uuid')
const path = require('path')
const {Equipment, EquipmentInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const { title } = require('process');

class EquipmentController {
    async create(req, res, next){
        try{
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const equipment = await Equipment.create({name, price, brandId, typeId, img: fileName});

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    EquipmentInfo.create({
                        title: i.title,
                        description: i.description,
                        equipmentId: equipment.id
                    })
                )
            }


            return res.json(equipment)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const {brandId, typeId} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit 
        let equipments;
        if (!brandId && !typeId) {
            equipments = await Equipment.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            equipments = await Equipment.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            equipments = await Equipment.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            equipments = await Equipment.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(equipments)
    }

    async getOne(req, res){

    }
}

module.exports = new EquipmentController()