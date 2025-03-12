export default function updatePropertyController (req, res){
    return res.json({
        id: 1,
        message: "Imovel criado com sucesso!"
        property: {
            tipo: "Aluguel",
            endereco: "Rua Coronel Aristides, 27",
            quartos: 3,
            propriedade: "Casa"
    }
    })
}