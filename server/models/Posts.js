module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    // email: {
    //   type: DataTypes.STRING,
    //   adjustPrivileges: true,
    //   unique: true,
    //   allowNull: false,
    // },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: null,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: null,
    // },
  });
  return Posts;
};
