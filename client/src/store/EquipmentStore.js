import {makeAutoObservable} from 'mobx';

export default class EquipmentStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Кроссовки'}
        ]
        this._brands = [
            {id: 1, name: "Nike"}
        ]
        this._equipments = [
            {id: 7, name: "Nike Lebron XX Laser Blue", price: 17990, img: 'https://www.thenextsole.com/storage/images/DQ8651-400.png'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setEquipments(equipments) {
        this._equipments = equipments
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get equipments() {
        return this._equipments
    }
}