import { apiRequest } from "./queryClient";

export interface ToolRequestBody {
  [key: string]: string;
}

export async function downloadContent(platform: string, url: string) {
  const response = await apiRequest("POST", `/api/${platform}`, { url });
  return response.json();
}

export async function generateContent(tool: string, input: string | object) {
  const response = await apiRequest("POST", `/api/${tool}`, input);
  return response.json();
}

export async function analyzeContent(tool: string, input: string | object) {
  const response = await apiRequest("POST", `/api/${tool}`, input);
  return response.json();
}
