const links = {
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  question: (id) => `/question/${id}`,
  userProfile: (id) => `/user/${id}`
};

export default links;