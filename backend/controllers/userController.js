const User = require("../models/userModel");

// login user
const loginUser = (req, res) => {
  res.json({ message: "login user" });
};

// signup user
const signupUser = (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email,password);
    res.ststus(200).json({email, user})
  }
  catch(error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = { signupUser, loginUser };
