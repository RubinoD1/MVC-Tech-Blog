const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create the User model- extends is used so 'User' inherits all the functionality the 'Model' class has.
class User extends Model {}

// define table columns and configuration
// The .init() method is used to initialize the model's data and configuration, passing in two objects as arguments.
User.init(
  //The first object defines the columns and the data types for those columns. 
  {
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      // define a username column
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        //username must be unique (not already taken).
        unique: true,
        validate: {
          // this means the username must be at least one character long
          len: [1]
        }
        },
        // define a password column
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // this means the password must be at least four characters long
          len: [4]
        }
      }
    },
    {
      hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        // set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData) {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        }
      },
     //The second object .init() accepts configures certain options for the table.
  
     // TABLE CONFIGURATION OPTIONS GO HERE 

     // pass in our imported sequelize connection (the direct connection to our database)
     sequelize,
     // don't automatically create createdAt/updatedAt timestamp fields
     timestamps: false,
     // don't pluralize name of database table
     freezeTableName: true,
     // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
     underscored: true,
     // make it so our model name stays lowercase in the database
     modelName: 'user'
    }
);

//export the model so we can use it in other parts of the app.
module.exports = User;