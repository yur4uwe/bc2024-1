fetch('https://api.github.com/users/yur4uwe')
  .then(response => response.json())
  .then(data => console.log('Hello, ', data.login))
  .catch(error => console.error('Error:', error));