//Import the OpenAPI Large Language Model (you can import other models here eg. Cohere)
import { OpenAI } from "langchain/llms/openai";
import * as fs from "fs";
import path from "path";

//Load environment variables (populate process.env from .env file)
import * as dotenv from "dotenv";
dotenv.config();


export interface TailorArgs {
  jobName: string,
};

// Generation flags to save API billing whenever possible
const GENERATE_BULLETPOINTS = false;
const GENERATE_SKILLS = false;
const GENERATE_COVERLETTER = true;
const GENERATE_FOLLOWUP = false;

class Prompt {
  header: string;
  args: string[];
  constraints: string[];
  retries: number;
}

const promptToString = (prompt: Prompt) => prompt.header + 
prompt.constraints.reduce((sum: string, curr: string) => sum + curr, "") + 
prompt.constraints.reduce((sum: string, curr: string) => sum + curr, "");

const executePrompt = async (model: OpenAI, prompt: Prompt): Promise<string> => {
  let res = await model.call(promptToString(prompt));
  for (var i = 0; i < prompt.retries; i++) {
    res += await model.call(prompt + "Continue off the incompleted answer: " + res);
  }
  return res;
}

export const run = async () => {
  const model = new OpenAI({ 
    temperature: 0,
    timeout: 45000,
  });
  const input1: string = fs.readFileSync(path.join(__dirname, 'master-input1.ts'), 'utf-8');
  const input2: string = fs.readFileSync(path.join(__dirname, 'master-input2.ts'), 'utf-8');
  const input3: string = fs.readFileSync(path.join(__dirname, 'master-input3.txt'), 'utf-8');

  const tailor = async (tailorArgs: TailorArgs, safety: boolean = true) => {
    // Inputs
    var jobDescription: string = fs.readFileSync(path.join(__dirname, "descriptions/" + tailorArgs.jobName + ".txt"), 'utf-8');
    jobDescription.replace((/  |\r\n|\n|\r/gm)," ");

    if (GENERATE_BULLETPOINTS) {
      fs.writeFileSync(path.join(__dirname, 'output1/' + tailorArgs.jobName + '.ts'), await executePrompt(model, {
        header: 'Can you tailor a resume Typescript file in a way that it would best match a job description? ',
        args: [
          'Here are tailorable contents, surrounded in backticks: `' + input1,
          '`, and here is the job description, surrounded in backticks: `' + jobDescription + '`. '
        ],
        constraints: [
          'Choose descriptions which are most relevant from the job description to hide, with a focus on job description keywords. For descriptions that are not chosen, replace them with the string `HIDDEN`, and only replace up to 5 descriptions. ',
          'Make sure that the output follows the exact same format as the original tailorable contents, and that all constants in the input are present in the output. ',
        ],
        retries: 3,
      }));
    }
    
    if (GENERATE_SKILLS) {
      fs.writeFileSync(path.join(__dirname, 'output2/' + tailorArgs.jobName + '.ts'), await executePrompt(model, {
        header: 'Can you tailor a resume Typescript file in a way that it would best match a job description? ',
        args: [
          'Here are tailorable contents: ' + input2,
          ', and here is the job description, surrounded in backticks: `' + jobDescription + '`. '
        ],
        constraints: [
          'For any skills that are not relevant to the job description, with a focus on job description keywords, replace the number value with -1.',
          'Make sure that the output follows the exact same format as the original tailorable contents, and that the object attribute names are the same.',
        ],
        retries: 1,
      }));
    }

    if (GENERATE_COVERLETTER) {
      fs.writeFileSync(path.join(__dirname, 'coverletters/' + tailorArgs.jobName + '.txt'), await executePrompt(model, {
        header: 'Can you write a cover letter, based on a job description, and relevant sections of my track record? ',
        args: [
          'Here is my track record: `' + input3,
          '`, here is the job description: `' + jobDescription + 
          '`, and here is a list of all my skills and years of experience in each skill: `' + input3 + '`.',
        ],
        constraints: [],
        retries: 2,
      }));
    }
    
    if (GENERATE_FOLLOWUP) {
      fs.writeFileSync(path.join(__dirname, 'followups/' + tailorArgs.jobName + '.txt'), await executePrompt(model, {
        header: 'Can you write a resume follow-up email, based on a job description, and relevant sections of my track record? ',
        args: [
          'Here is my track record: `' + input3,
          '`, here is the job description: `' + jobDescription + 
          '`, and here is a list of all my skills and years of experience in each skill: `' + input3 + '`.',
        ],
        constraints: [],
        retries: 0,
      }));
    }    
  }

  const buildResume = (jobName: string) => {
    fs.writeFileSync(path.join(__dirname, "resumes/" + jobName + '.ts'), 
        "import { ResumeStructure } from '../../structure';\n" +
        "import { b_amz01, b_amz02, b_amz03, b_amz04, b_amz05, b_amz06, b_amz07, b_amz08, b_amz09, b_amz10, b_atom1, b_atom2, b_chat1, b_eecs1, b_fflc1, b_fflc2, b_fflc3, b_fflc4, b_flwd1, b_flwd2, b_ieee1, b_lbl01, b_lbl02, b_lbl03, b_msg01, b_msg02, b_msg03, b_nim01, b_nim02, b_nim03, b_nim04, b_nim05, b_nim06, b_nim07, b_pent1, b_pent2, b_pent3, b_pent4 } from " +
        "'../output1/" + jobName + "';\n" +
        "import { SKILL_OBJECT } from '../output2/" + jobName + "';\n\n" +
  
        fs.readFileSync(path.join(__dirname, 'master.txt'))
    )
  }
  
  for (const jobDescription of fs.readdirSync(path.join(__dirname, 'descriptions'))) {
    const jobName = jobDescription.slice(0, -4);
    tailor({jobName: jobName});
    buildResume(jobName);
  }
};



run();
console.log("completed");
