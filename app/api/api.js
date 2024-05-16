import axios from "axios";

export async function getProjects() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/api/projects?populate=*`,
      );
      let projects = [];
      response.data.data.forEach((project) => {
        projects.push({
          id: project.id,
          title: project.attributes.title,
          description: project.attributes.description,
          image: `${process.env.BACKEND_URL}${project.attributes.image.data.attributes.url}`,
          gitUrl: project.attributes.gitUrl,
          previewUrl: project.attributes.previewUrl,
          tags: project.attributes.tags.data.map((tag) => tag.attributes.name),
        });
      });
      resolve(projects);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getTags() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/api/project-tags`,
      );
      let tags = [];
      response.data.data.forEach((tag) => {
        tags.push(tag.attributes.name);
      });
      resolve(tags);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getAchievements() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/api/achievement`,
      );
      resolve(response.data.data.attributes);
    } catch (error) {
      reject(error);
    }
  });
}
