export default function createPropertyController(req, res) {
    const property = req.body

    //TODO validar e inserir no BD

    return res.json({
        message: "Imovel criado com sucesso!",
        property: property
    })
}