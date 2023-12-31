async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  let postData = await data.json();
  return postData;
}

export default getData;
