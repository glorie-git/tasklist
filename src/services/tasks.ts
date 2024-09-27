import axios from "axios";
const baseUrl = "/api/tasklist";

// Define the type for your task
interface Task {
  id: string; // or string, depending on your data structure
  name: string; // Adjust this based on your actual task properties
}

const getAll = async () => {
  const request = axios.get<Task[]>(baseUrl);
  return request.then((response) => response.data);
};

interface createProps {
  name: string;
}

const create = async ({ name }: createProps) => {
  const request = axios.post<Task>(baseUrl, { name });
  return request.then((response) => response.data);
};

const deleteTask = async (id: string) => {
  const request = axios.delete<Task>(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteTask };
