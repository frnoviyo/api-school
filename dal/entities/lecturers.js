"use strict";

module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define(
    "lecturers",
    {
      lectureName: DataTypes.STRING,
    },
    {
      tableName: "lecturers",
      timestamps: true,
    }
  );

  Lecturer.associate = function (models) {
    Lecturer.hasOne(models.courses, {
      foreignKey: "lectureId",
      as: "courses",
    });
  };

  return Lecturer;
};
