import { executeQuery } from "../database/database.js";

const completeById = async (id) => {
  await executeQuery("DELETE FROM project_issues WHERE project_id = $1;",
  id,
  );
  await executeQuery("DELETE FROM projects WHERE id = $1;",
  id,
  );
};

const create = async (name) => {
  await executeQuery("INSERT INTO projects (name) VALUES ($1);", name);
};

const findAllProjects = async () => {
  let result = await executeQuery(
    "SELECT * FROM projects;",
  );
  return result.rows;
};

const findById = async (id) => {
  let result = await executeQuery("SELECT * FROM projects WHERE id = $1;",
   id,
   );
  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }
  
  return { id: 0, name: "Unknown" };
};

export { completeById, create, findAllProjects, findById };