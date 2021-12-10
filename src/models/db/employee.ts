import { Schema, SchemaTypes } from "mongoose";
import { Employee } from "../../entities/Employee";

const employeeModel = new Schema<Employee>({
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
    type: String,
    required: true,
  },
  area: {
    type: SchemaTypes.Number,
    require: true,
  },
}).set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export {
  employeeModel,
}