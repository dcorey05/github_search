// search GitHub API
export const searchUsers = (query) => {
  return fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  ).then((response) => {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    return response.json().then((data) => {
      return data;
    });
  });
  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
};
