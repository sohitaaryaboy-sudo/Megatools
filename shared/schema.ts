import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const toolResults = pgTable("tool_results", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  tool: varchar("tool").notNull(), 
  input: text("input").notNull(),
  result: json("result"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertToolResultSchema = createInsertSchema(toolResults).pick({
  tool: true,
  input: true,
  result: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ToolResult = typeof toolResults.$inferSelect;
export type InsertToolResult = z.infer<typeof insertToolResultSchema>;

// Tool response types
export interface DownloadResult {
  platform: string;
  url: string;
  downloadUrl?: string;
  message: string;
  title?: string;
  thumbnail?: string;
  duration?: string;
  format?: string;
}

export interface GeneratorResult {
  tool: string;
  input: string;
  result: string | string[];
  suggestions?: string[];
}

export interface AnalysisResult {
  tool: string;
  url: string;
  data: {
    views?: string;
    likes?: string;
    subscribers?: string;
    engagement?: string;
    seoScore?: number;
    tags?: string[];
    growth?: string;
  };
}
