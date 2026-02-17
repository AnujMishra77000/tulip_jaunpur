import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("testimonials").order("desc").collect();
  },
});

export const create = mutation({
  args: {
    patientName: v.string(),
    treatment: v.string(),
    rating: v.number(),
    review: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("testimonials", {
      ...args,
      date: new Date().toISOString(),
    });
  },
});
