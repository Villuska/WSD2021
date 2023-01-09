import { executeQuery } from "../database/database.js";

const createIssue = async (project_id,description) => {
  await executeQuery(
    "INSERT INTO project_issues (project_id, description) VALUES ($1, $2);",
    project_id,
    description
  );
};

const findCurrentIssue = async (task_id) => {
  let result = await executeQuery(
    "SELECT * FROM project_issues WHERE id = $1;",
    task_id,
  );

  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }

  return false;
};

const findProjectIssues = async (task_id) => {
  let result = await executeQuery(
    "SELECT * FROM project_issues WHERE project_id = $1;",
    task_id,
  );
  return result.rows
}
 
const resolveIssue = async (id) => {
  await executeQuery(
    "DELETE FROM project_issues WHERE id = $1;",
    id,
  );
};

export {
  createIssue,
  findCurrentIssue,
  resolveIssue,
  findProjectIssues,
};