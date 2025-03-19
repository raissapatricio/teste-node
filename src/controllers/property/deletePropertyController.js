export default function deletePropertyController(req, res) {
    const {id} = req.params
    return res.json({
        message: 'Imóvel ID ${id} excluido com sucesso!',
        property: {
            id: +id,
            tipo: "Aluguel",
            endereco: "Rua Coronel Aristides, 27",
            quartos: 3,
            propriedade: "Casa"
        }
    })
}