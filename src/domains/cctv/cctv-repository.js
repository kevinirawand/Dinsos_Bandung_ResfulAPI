import { Sequelize, DataTypes } from "sequelize";

import { Database } from "../../configs/database.js";

const db = new Database();

export const CctvLocationModel = db.define("cctv_lokasi", {
   id_cctv_lokasi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   nama_lokasi: {
      type: DataTypes.STRING
   },
   latitude: {
      type: DataTypes.STRING
   },
   longitude: {
      type: DataTypes.STRING
   },
   updated_by: {
      type: DataTypes.STRING,
      defaultValue: 'kevin'
   },
   timestamps: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.NOW
   }
}, {
   allowNull: false,
   timestamps: true,
   modelName: "cctv_lokasi",
   freezeTableName: true
});

export const CctvListModel = db.define("cctv_list", {
   id_cctv_list: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   id_cctv_lokasi: {
      type: DataTypes.INTEGER
   },
   nama_cctv: {
      type: DataTypes.STRING
   },
   stream: {
      type: DataTypes.STRING
   },
   updated_by: {
      type: DataTypes.STRING,
      defaultValue: 'kevin'
   },
   timestamps: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.NOW
   }
}, {
   allowNull: false,
   timestamps: true,
   modelName: "cctv_lokasi",
   freezeTableName: true
});

// CctvLocationModel.hasMany(CctvListModel);