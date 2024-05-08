export function chekPets(req, res, next) {
    const {name, species, carry, weight, date_of_birth} = req.body

    if(!name || !species || !carry || !weight || !date_of_birth) {
        return res.status(400).json({
            error: true,
            message: "All fields are mandatory."
        })
    }

return next()
}
