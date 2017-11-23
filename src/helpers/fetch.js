export default function fetcher(params) {
  const {url, ...rest} = params;

  return fetch(url, rest)
    .then((response) => {
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        return response.json();
      }

      throw new TypeError('Oops, we haven\'t got JSON!');
    })
    .then((json) => {
      if (json.success) {
        return json.body;
      } else {
        throw new Error(json.error)
      }
    })
};