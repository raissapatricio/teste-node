export default function createUserController (req, res){
    return res.json({
        message: "Usuário criado com sucesso!",
        user: {
            id: 1,
            name: "Renan Cavichi",
            email: "renancavichi@gmail.com",
        }
    })
}