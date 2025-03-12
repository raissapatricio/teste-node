import express from 'express'
import getPropertyController from '../controllers/property/getPropertyController.js'
import { get } from 'express/lib/response'

const router = express.Router()

router.get('/', getPropertyController)

router.post('/', createPropertyController)

router.put('/', (req, res) => {})

router.delete('/', (req, res) => {
    return res.json({
    message: "Imovel criado com sucesso!"
    property: {
        tipo: "Aluguel",
        endereco: "Rua Coronel Aristides, 27",
        quartos: 3,
        propriedade: "Casa"
    }
    })
})

router.patch('/', (req, res) => {
    return res.json({
    message: "Imovel criado com sucesso!"
    property: {
        id: 1,
        tipo: "Aluguel",
    }
    })
})

export default router