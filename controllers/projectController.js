import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as projectService from "../services/projectService.js";
import * as projectIssueService from "../services/projectIssueService.js";
import * as requestUtils from "../utils/requestUtils.js";

const addTask = async (request) => {
  const body = new TextDecoder().decode(await Deno.readAll(request.body));
  const params = new URLSearchParams(body);
  const name = params.get("name");

  await projectService.create(name);
  await requestUtils.redirectTo(request, "/projects");
};

const viewTask = async (request) => {
  const urlParts = request.url.split("/");

  const data = {
    project: await projectService.findById(urlParts[2]),
    currentIssue: await projectIssueService.findCurrentIssue(urlParts[2]),
    allIssues: await projectIssueService.findProjectIssues(urlParts[2])
  };
  
  request.respond({ body: await renderFile("project.eta", data) });
};

const viewTasks = async (request) => {
  const data = {
    projects: await projectService.findAllProjects(),
  };

  request.respond({ body: await renderFile("projects.eta", data) });
};

const completeTask = async (request) => {
  const urlParts = request.url.split("/");
  await projectService.completeById(urlParts[2]);      
  await requestUtils.redirectTo(request, "/projects");
};


export { addTask, viewTask, viewTasks, completeTask };