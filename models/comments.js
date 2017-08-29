'use strict';

//Need to add attributes (i.e. AllowNull, Validate) to model definition.
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
      len: [1]
    },
    votes: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    links: {
      type: DataTypes.TEXT,
      validate: {
        isURL: {allow_underscores: true}
    }
  }
  });
    Comments.associate = function(models) {
      Comments.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        },
        onDelete: "CASCADE"
      });

      Comments.belongsTo(models.Posts, {
        foreignKey: {
          allowNull: false
        },
        onDelete: "CASCADE"
      });
    };
  return Comments;
};
