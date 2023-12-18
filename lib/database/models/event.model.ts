import { Schema, models, model, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string; // Optional since not required in schema
  location?: string; // Optional since not required in schema
  createdAt: Date; // Matches schema type
  imageUrl: string; // Matches schema type
  startDateTime: Date; // Matches schema type
  endDateTime: Date; // Matches schema type
  price?: string; // Optional since not required in schema
  isFree?: boolean; // Optional since has a default value in schema
  url?: string; // Optional since not required in schema
  category: { _id: string; name: string }; // Matches schema type
  organizer: { _id: string; firstName: string; lastName: string }; // Matches schema type
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
