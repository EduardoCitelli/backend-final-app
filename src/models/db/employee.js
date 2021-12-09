import { Schema, SchemaTypes } from "mongoose";
require("mongoose-type-email");

const employeeModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: SchemaTypes.Email,
    required: true,
  },
  area: {
    type: SchemaTypes.Number,
    require: true,
  },
});

export {
  employeeModel,
}