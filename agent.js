import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import * as dotenv from "dotenv";
import { FUNCTION_LIST } from "./functions.js";

dotenv.config();

const chat = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-4", // or "gpt-3.5-turbo"
});

const prompt = new PromptTemplate({
  template: `
You are an AI assistant that translates user requests into pseudo-code function calls.

Use the following format:
<function_call>(arg1=value1, arg2=value2)

Only respond with a function call. Don't explain anything else.

Available functions:
{functions}

User Request: {input}
Function Call:
`,
  inputVariables: ["functions", "input"],
});

async function runAgent(userInput) {
  const formattedPrompt = await prompt.format({
    functions: FUNCTION_LIST.join("\n"),
    input: userInput,
  });

  const response = await chat.invoke([
    { role: "user", content: formattedPrompt }
  ]);

  console.log(response.content);
}

// CLI input
const input = process.argv.slice(2).join(" ");
if (!input) {
  console.error("Please provide input like: node agent.js 'Add a customer named Alice'");
  process.exit(1);
}
runAgent(input);
