function FetchSubmit() {
  return(
      fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(console.log)
        )};
      export default FetchSubmit;