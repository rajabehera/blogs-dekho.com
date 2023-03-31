//const bcrypt = require('bcrypt')

const {
  create,
  getUserById,
  getUsers,
  updateUser,
  updateUserStatus,
  updateUserVerified,
  deleteUser,
  getUserByUserEmail,
} = require("./user.service");

const { genSaltSync, hashSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async(req, res) => {
    const body = req.body;

 console.log('body',body);
  //  const { name, email, password, confPassword } = req.body;
    if(!body.name){
      return res.status(400).json({msg: "Name required",success:"1"});
    }
    if(!body.email){
      return res.status(400).json({msg: "Email required",success:"2"});
    }
    if(!body.dob){
      return res.status(400).json({msg: "Date of Birth required",success:"5"});
    }
    if(!body.password){
      return res.status(400).json({msg: "Password required",success:"3"});
    }
    if(body.password !== body.confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match",success:"4"});
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    // const salt = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(body.password, salt);
    try {
   create(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
   });

    }catch (error) {
      console.log(error);
  }

  },
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        console.log('-----------0-----------',err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "*Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log('err--------------',err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully2",
      });
    });
  },
  updateUsersStatus: (req, res) => {
    const body = req.body;
    updateUserStatus(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
   updateUsersVerified: (req, res) => {
    const body = req.body;
    updateUserVerified(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
  login: async(req, res) => {
      const body = req.body;
      console.log('body',body);
     
          
      getUserByUserEmail(body.email, (err, results) =>{
        try{
        console.log('results',results);
        const match =   bcrypt.compareSync(body.password, results.password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = results.id;
        const name = results.name;
        const email = results.email;
        const verify = results.verified;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET);
        if(!verify) return res.status(400).json({msg: "User not verified"});
        res.json({ 
                  success: 1,
                  message: "login successfully ho gaya h",
                  token: accessToken,
                  result: results });
      }
      catch (error){
        res.status(404).json({msg:"Email not found"});
      }   

      });
   
  }
};
