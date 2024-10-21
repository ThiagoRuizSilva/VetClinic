export function chek(req, res, next) {
  const { name, phone, email, date_of_birth, zip_code } = req.body;

  if (!name || !phone || !email || !date_of_birth || !zip_code) {
    return res.status(400).json({
      error: true,
      message: "All fields are mandatory.",
    });
  }

  return next();
}
