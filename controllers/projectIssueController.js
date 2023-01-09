import * as projectIssueService from "../services/projectIssueService.js";
import * as requestUtils from "../utils/requestUtils.js";

const createIssue = async (request) => {
  const body = new TextDecoder().decode(await Deno.readAll(request.body));
  const params = new URLSearchParams(body);
  const issueDescription = params.get("description");
  const urlParts = request.url.split("/");
  await projectIssueService.createIssue((urlParts[2]),issueDescription);
  await requestUtils.redirectTo(request, `/projects/${urlParts[2]}`);
};

const resolveIssue = async (request) => {
  const urlParts = request.url.split("/");
  await projectIssueService.resolveIssue(urlParts[4]);
  await requestUtils.redirectTo(request, `/projects/${urlParts[2]}`);
};

export { createIssue, resolveIssue };