export default function createUserController (req, res){
    return res.json({
        message: "Usuário criado com sucesso!",
        user: {
            name: "Raissa Patricio",
            email: "raissapatricio2020@gmail.com",
            avatar: "http://github.com/raissapatricio.png"
        }
    })
}