import { useState, useEffect } from "react";
import axios from "axios";
import "./Container.css";
const Container = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((response) => {
        if (response.status === 200) {
          setRows(response.data);
        }else{
            alert('sorry')
        }
      });
  }, []);

  return (
    <div className="container">
      <div className="coc">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item._id}</th>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

//Enter your email address...
//Enter your password...
export default Container;
