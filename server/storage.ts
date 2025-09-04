import { type User, type InsertUser, type ToolResult, type InsertToolResult, type DownloadResult, type GeneratorResult, type AnalysisResult } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveToolResult(result: InsertToolResult): Promise<ToolResult>;
  getToolResults(tool: string): Promise<ToolResult[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private toolResults: Map<string, ToolResult>;

  constructor() {
    this.users = new Map();
    this.toolResults = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveToolResult(insertResult: InsertToolResult): Promise<ToolResult> {
    const id = randomUUID();
    const result: ToolResult = {
      ...insertResult,
      id,
      createdAt: new Date(),
    };
    this.toolResults.set(id, result);
    return result;
  }

  async getToolResults(tool: string): Promise<ToolResult[]> {
    return Array.from(this.toolResults.values()).filter(
      (result) => result.tool === tool,
    );
  }
}

export const storage = new MemStorage();
