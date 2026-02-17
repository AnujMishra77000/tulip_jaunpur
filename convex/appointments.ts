import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    patientName: v.string(),
    patientEmail: v.string(),
    patientPhone: v.string(),
    doctorId: v.id("doctors"),
    appointmentDate: v.string(),
    appointmentTime: v.string(),
    specialty: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("appointments", {
      ...args,
      status: "pending",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("appointments").collect();
  },
});

export const getByDoctor = query({
  args: { doctorId: v.id("doctors") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("appointments")
      .withIndex("by_doctor", (q) => q.eq("doctorId", args.doctorId))
      .collect();
  },
});
