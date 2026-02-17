import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  doctors: defineTable({
    name: v.string(),
    specialty: v.string(),
    qualification: v.string(),
    experience: v.number(),
    image: v.optional(v.string()),
    description: v.string(),
    availability: v.array(v.string()),
  }),
  
  appointments: defineTable({
    patientName: v.string(),
    patientEmail: v.string(),
    patientPhone: v.string(),
    doctorId: v.id("doctors"),
    appointmentDate: v.string(),
    appointmentTime: v.string(),
    specialty: v.string(),
    message: v.optional(v.string()),
    status: v.string(), // "pending", "confirmed", "cancelled"
  }).index("by_doctor", ["doctorId"])
    .index("by_date", ["appointmentDate"]),

  services: defineTable({
    name: v.string(),
    category: v.string(), // "heart", "kidney", "general"
    description: v.string(),
    features: v.array(v.string()),
    icon: v.string(),
  }),

  testimonials: defineTable({
    patientName: v.string(),
    treatment: v.string(),
    rating: v.number(),
    review: v.string(),
    date: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
