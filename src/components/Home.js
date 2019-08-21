import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Home(posts = []) {
  const initialValue = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ];
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios('https://jsonplaceholder.typicode.com/posts');
      //   console.log(result);
      setData(result.data);
    };

    fetchData();
  }, []);
  // {JSON.stringify(data)}
  return (
    <div className="container">
      {/* {JSON.stringify(initialValue)} */}
      {data.map(post => (
        <div className="card-content">
          <div className="post card" key={post.id}>
            <span>{post.title}</span> {post.body}{' '}
          </div>
        </div>
      ))}
      {/* <div>post.title</div>;
      })} */}

      {/* {data.map(post => <div key={post.id}>
          <span>{post.title}</span>
        </div>)} */}
    </div>
  );
}

export default Home;
