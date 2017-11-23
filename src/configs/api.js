const api = {
  question: (id, body) => ({
    url: `http://localhost:3001/api/question/${id}.json`,
    method: 'GET',
    body: body
  }),
};

export default api;