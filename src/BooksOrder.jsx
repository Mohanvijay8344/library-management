import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";




export function BooksOrder({ booklist,setBooklist }) {
  const navigate = useNavigate();
  const removeSecond = (id) => {
    const latest = ((current) =>
      current.filter((books) => books.id !== id)
      
    );
    setBooklist(latest);
  }
  
  return (
    <div className="orders">
      {booklist.map((list,id) => (
          <BookList list={list} 
          id={list.id}
          key={list.id}
          deletes={<button onClick={() => removeSecond(list.id)}>Delete</button>}
          edit={<button onClick={() => navigate(`/books-list/edit/${list.id}`)}>edit</button>} />
      )
      )}
    </div>
  );
}

function BookList({ list,deletes,edit,id,booklist,setBooklist }) {
  return(
    <div className="list">
      <h2>{list.title}</h2>
      <p>Author Name:<b>{list.author}</b></p>
      <img src={list.image} alt={list.title} />
      <div className="fonts">
        <p>{list.summary}</p>
        <p>Rating: {list.rating}</p>
      </div>
      <div className="btns">
      {deletes}
      {edit}
      </div>
    </div>
  )
}

