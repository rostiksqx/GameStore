import http from './fetcher';

export async function getAllCategories() {
  return await http.get(`${process.env.REACT_APP_API_URL}/category`, true);
}

export async function createCategory(name: any) {
  return await http.post('/category', {
    name
  }, true);
}

export async function deleteCategory(id: string) {
  return await http.delete(`/category/${id}`, true);
}