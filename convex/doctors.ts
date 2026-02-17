import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("doctors").collect();
  },
});

export const getBySpecialty = query({
  args: { specialty: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("doctors")
      .filter((q) => q.eq(q.field("specialty"), args.specialty))
      .collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    specialty: v.string(),
    qualification: v.string(),
    experience: v.number(),
    image: v.optional(v.string()),
    description: v.string(),
    availability: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("doctors", args);
  },
});
