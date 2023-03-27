import { Sequelize, DataTypes } from "sequelize";
import { Database } from "../../configs/database.js";

const db = new Database();

const UserModel = db.define("users", {
   username: {
      type: DataTypes.STRING
   },
   password: {
      type: DataTypes.STRING
   },
   role: {
      type: DataTypes.ENUM,
      values: [
         'admin',
         'user'
      ],
      defaultValue: 'user'
   },
   timestamps: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.NOW
   }
}, {
   allowNull: false,
   timestamps: true,
   modelName: "User"
});

export default UserModel;