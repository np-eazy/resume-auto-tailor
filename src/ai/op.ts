//Import the OpenAPI Large Language Model (you can import other models here eg. Cohere)
import { OpenAI } from "langchain/llms/openai";
import { raw } from "./raw";
import * as fs from "fs";
import path from "path";

//Load environment variables (populate process.env from .env file)
import * as dotenv from "dotenv";
dotenv.config();

export const run = async () => {
  const model = new OpenAI({ temperature: 0.9 });

  // Inputs
  const rawResume: string = fs.readFileSync(path.join(__dirname, 'raw.ts'), 'utf-8');
  const jobDescription: string = fs.readFileSync(path.join(__dirname, 'description.txt'), 'utf-8');

  // Prompt structure
  const promptHeader: string = 'Can you tailor a resume JSON in a way that it would best match a job description? ';
  const promptArgs: string = 'Here is the resume: """' + rawResume + '""", and here is the job description: """' + jobDescription + '""". ';
  const promptConstraints: string[] = [
    'Do not mutate any sentences or strings, only delete whole elements from lists that are marked with [ and ] square brackets. ',
    'For the list of experiences, choose the four strongest experiences that match the job description best. ',
    'For each experience, choose up to five of the strongest bullet points that match the job description best. ',
    'Make sure that the output follows the same format and schema of the rawResume as a valid Typescript file. ',
    'Take up to 45 seconds to generate the output. '
  ];

  // const prompt: string = promptHeader + promptArgs + promptConstraints.reduce((sum: string, curr: string) => sum + curr, "");
  const prompt: string = "Return a statement that sets a variable named 'message' to 'Hello, world!' Make sure the entire return is a valid Typescript file."; // Sanity check to make sure that 400 from large prompts isn't from anything else.
  const res = await model.call(prompt);

  // Dump result onto designated file
  fs.writeFileSync(path.join(__dirname, 'tailor.ts'), res);
};

run();
console.log("completed");
