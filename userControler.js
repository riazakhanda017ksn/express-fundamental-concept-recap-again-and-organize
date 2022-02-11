module.exports.registerUser = (req, res) => {
  const useName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  res.json({
    success: true,
    name: useName,
    email: userEmail,
    password: userPassword,
  });
};
