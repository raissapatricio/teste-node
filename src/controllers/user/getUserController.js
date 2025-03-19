export default function getUserController(req, res) {
    const {id} = req.params

    return res.json({
        ide: parsenInt(id),
        name: "Raissa Patricio",
        email: "raissapatricio2020@gmail.com",
        avatar: "http://github.com/raissapatricio.png"
    })
}