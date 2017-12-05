const links = {
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  ask: () => '/ask',
  allUsers: () => `/users`,
  userProfile: (id) => `/users/${id}`,
  allTags: () => `/tags`,
  tag: (name) => `/tags/${name}`,
  allQuestions: () => `/questions`,
  question: (id) => `/questions/${id}`
};

export default links;