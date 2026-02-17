import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("services").collect();
  },
});

export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("services")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    category: v.string(),
    description: v.string(),
    features: v.array(v.string()),
    icon: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("services", args);
  },
});
