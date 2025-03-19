export default function getPropertyController(req, res){
    return res.json({
        id: 1,
        tipo: "Aluguel",
        endereco: "Rua Coronel Aristides, 27",
        quartos: 3,
        propriedade: "Casa"
    })
}