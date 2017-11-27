const links = {
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  allUsers: () => `/users`,
  userProfile: (id) => `/users/${id}`,
  allTags: () => `/tags`,
  allQuestions: () => `/questions`,
  question: (id) => `/questions/${id}`
};

export default links;