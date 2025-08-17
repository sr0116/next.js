"use client";

export default function PostList ({ posts, onRemove, onToggle, openIdx }) {
    return (
        <ul>
          {posts.map( (post, idx) => (
              <li key={idx}>
                <span onClick={() => onToggle(idx)} style={{cursor: "pointer"}} >
                  {post.title}
                </span>
                <button onClick={() => onRemove(idx)}> 삭제</button>
                {openIdx === idx && <p> {post.content}</p>}
              </li>
          ))}
        </ul>
    );
}