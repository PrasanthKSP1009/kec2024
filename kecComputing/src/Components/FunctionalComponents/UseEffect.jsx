import { useEffect, useState } from "react";
import axios from "axios";

var UseEffect = () => {
  //   var [text, setText] = useState("Kongu");
  //   useEffect(()=>{
  //     console.log(text);
  //   },[text])
  //   return (
  //     <section>
  //       <h1>Use Effect Example</h1>
  //       <input
  //         type="text"
  //         placeholder="Enter your text"
  //         value={text}
  //         onChange={(e) => {
  //           setText(e.target.value)
  //         }}
  //       />
  //       <h2>Text typed is {text}</h2>
  //     </section>
  //   );
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <h1>Fetching data from Json Placeholder API</h1>
      <h2>Posts are</h2>
      {post.map((element) => (
        <li key={element.id}>{element.title}</li>
      ))}
    </section>
  );
};
export default UseEffect;
