const links = {
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  allUsers: () => `/users`,
  allTags: () => `/tags`,
  allQuestions: () => `/questions`,
  question: (id) => `/question/${id}`,
  userProfile: (id) => `/user/${id}`
};

export default links;