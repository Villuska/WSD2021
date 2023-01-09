import { serve } from "https://deno.land/std@0.100.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as projectController from "./controllers/projectController.js";
import * as projectIssueController from "./controllers/projectIssueController.js";
import * as requestUtils from "./utils/requestUtils.js";

configure({
  views: `${Deno.cwd()}/views/`,
});



let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}
const server = serve({ port: port });

for await (const request of server) {
  if (request.url === "/" && request.method === "GET") {
    await requestUtils.redirectTo(request, "/projects");
  } else if (request.url === "/projects" && request.method === "POST") {
    await projectController.addTask(request);
  } else if (request.url === "/projects" && request.method === "GET") {
    await projectController.viewTasks(request);
  } else if (request.url.match("projects/[0-9]+") && request.method === "GET") {
    await projectController.viewTask(request);
  } else if (request.url.match("projects/[0-9]+/issues/[0-9]+") && request.method === "POST") {
    await projectIssueController.resolveIssue(request);
  } else if (request.url.match("projects/[0-9]+/issues") && request.method === "POST") {
    await projectIssueController.createIssue(request);
  } else if (request.url.match("projects/[0-9]+") && request.method === "POST") {
    await projectController.completeTask(request);
  } else {
    request.respond({ status: 404 });
  }
}