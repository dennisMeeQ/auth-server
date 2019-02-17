const userSchema = {
  type: "object",
  properties: {
    userId: {
      type: "string"
    },
    username: {
      type: "string"
    },
    firstName: {
      type: "string"
    },
    lastName: {
      type: "string"
    },
    email: {
      type: "string"
    }
  }
};

const userArraySchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      userId: {
        type: "string"
      },
      username: {
        type: "string"
      },
      firstName: {
        type: "string"
      },
      lastName: {
        type: "string"
      },
      email: {
        type: "string"
      }
    }
  }
};

module.exports = {
  userSchema,
  userArraySchema
};
