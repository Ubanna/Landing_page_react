const User = require('./models/User');
const UserSession = require('./models/UserSession');
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
var cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017/soccerDatabase', {useNewUrlParser: true})
.then(() => {
    console.log('saved')
  })
  .catch((err) => {
    console.log('Error on start: ' + err);
    process.exit(1);
  });
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


  /*
   * Sign up
   */
  app.post('/signup', (req, res) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.'
        });
      }

      // Save the new user
      const newUser = new User();

      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });

  });

  app.post('/signin', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;


    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    User.find({
      email: email
    }, (err, users) => {
      if (err) {
        console.log('err 2:', err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      // Otherwise correct user
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      }
      const token = jwt.sign(payload, 'seckert_KEy0923')
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error: server error'
          });
        }

        return res.send({
          success: true,
          message: 'Valid sign in',
          token: token
        });
      });
    });
  });

  app.get('/verify', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.

    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good'
        });
      }
    });
  });

  app.get('/logout', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.

    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: {
        isDeleted:true
      }
    }, null, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      return res.send({
        success: true,
        message: 'Good'
      });
    });
  });

  app.get('/:userId', async (req, res)=>{
    try{
    const user = await User.findById(req.params.userId)
    res.json(user)
    } catch (err){
      res.json({message:err})
    }
    })
 
  app.delete('/:userId', async function (req, res) {
    try {
      const removedPost = await User.remove({_id: req.params.userId})
      res.json(removedPost)
    } catch (err) {
      res.json ({ message: err })
    }
    
  });

  
  app.patch('/:userId', async function (req, res) {
    try {
      const updatedPost = await User.updateOne({_id: req.params.userId}, {$set: {password: this.generateHash(req.body.password)}})
      res.json(updatedPost)
    } catch (err) {
      res.json ({ message: err })
    }   
  });

  app.get('/', (req, res)=>{
    User.find({}, (err, result)=>{
        if(err){
            res.send(err)
            console.log(err)
        }else{
            res.json(result)
            console.log(result)
        }
    })
 })


const PORT = process.env.PORT || 3006

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})




