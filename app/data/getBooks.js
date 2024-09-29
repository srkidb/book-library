async function getBooks(query) {
  const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const link = `${baseURL}${query}`;
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Couldn not get books");
  }
  const data = response.json();
  return data;
}

async function getBook(id) {
  const baseURL = "https://www.googleapis.com/books/v1/volumes";
  const link = `${baseURL}${id}`;
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Couldn not get book");
  }
  const data = response.json();
  return data;
}

export { getBooks, getBook };
