import axios from "axios";
const baseUrl = "/api/tasklist";

// Define the type for your task
interface Task {
  id: number; // or string, depending on your data structure
  name: string; // Adjust this based on your actual task properties
  // Add other properties as needed
}

const getAll = () => {
  const request = axios.get<Task[]>(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll };
