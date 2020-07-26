"use strict";

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "courses",
    {
      lectureId: DataTypes.INTEGER,
      couseName: DataTypes.STRING,
    },
    {
      tableName: "courses",
      timestamps: true,
    }
  );
  Course.associate = function (models) {
    Course.belongsToMany(models.users, {
      through: "userCourses",
      foreignKey: "courseId",
      as: "users",
    });

    Course.belongsTo(models.lecturers, {
      foreignKey: "courseId",
      as: "lecturers",
    });
  };
  return Course;
};
