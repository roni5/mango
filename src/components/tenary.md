const postList = posts.length ? (
            posts.map( post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>{post.body} </p>
                        </div>
                   </div>
               )
           })
      ): (
            <div className="center">No Post Yet</div>
            )
            return (
    <div className="container">
      <h4 className="center">Home</h4>
      {postList}
    </div>)
  );