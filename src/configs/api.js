const api = {
  question: id => ({
    url: `http://localhost:3001/api/questions/${id}.json`,
    method: 'GET'
  }),
  allQuestions: () => ({
    url: `http://localhost:3001/api/questions/all.json`,
    method: 'GET',
  }),
  tag: name => ({
    url: `http://localhost:3001/api/tags/${name}.json`,
    method: 'GET'
  }),
  allTags: () => ({
    url: `http://localhost:3001/api/tags/all.json`,
    method: 'GET',
  }),
};

export default api;