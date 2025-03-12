export default function createPropertyController(req, res) {
    return res.json({
        message: "Imovel criado com sucesso!"
        property: {
            id: 1,
            tipo: "Aluguel",
            endereco: "Rua Coronel Aristides, 27",
            quartos: 3,
            propriedade: "Casa"
}
})
}