import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Chart } from "./Chart.1";
import { Pie } from "./Pie";
import { BooksOrder } from "./BooksOrder";
import { Routes, Route, Link } from "react-router-dom";
import { AddBook } from "./AddBook";
import { useNavigate, useParams } from "react-router-dom";
import { EditBook } from "./EditBook";

function App() {
  const [booklist, setBooklist] = useState([
    {
      id: 1,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      image:
        "https://cdn.britannica.com/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg?w=600&q=60",
      summary:
        "Any fan of stories that involve juicy subjects like adultery, gambling, marriage plots, and, well, Russian feudalism, would instantly place Anna Karenina at the peak of their “greatest novels” list.",
      rating: "5",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg?w=600&q=60",
      summary:
        "Lee’s To Kill a Mockingbird was published in 1960 and became an immediate classic of literature. The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. ",
      rating: "7.8",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:
        "https://cdn.britannica.com/47/24647-050-E6E25F22/F-Scott-Fitzgerald.jpg?w=600&q=60",
      summary:
        "he novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby",
      rating: "8.5",
    },
    {
      id: 4,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      image:
        "https://cdn.britannica.com/03/11603-050-85A0D5EA/Gabriel-Garcia-Marquez-1982.jpg?w=600&q=60",
      summary:
        "One Hundred Years of Solitude, in 1967. The novel tells the story of seven generations of the Buendía family and follows the establishment of their town Macondo until its destruction along with the last of the family’s descendents.",
      rating: "7.9",
    },
    {
      id: 5,
      title: "A Passage to India",
      author: "E.M. Forster",
      image: "https://cdn.britannica.com/27/213827-050-60818431.jpg?w=600&q=60",
      summary:
        "Cyril Fielding, and a visiting English schoolteacher named Adela Quested. When Adela believes that Aziz has assaulted her while on a trip to the Marabar caves near the fictional city of Chandrapore, where the story is set, tensions between the Indian community and the colonial British community rise.",
      rating: "8.6",
    },
    {
      id: 6,
      title: "Invisible Man",
      author: "Ralph Ellison’",
      image:
        "https://cdn.britannica.com/11/79911-050-5C091BE6/Ralph-Ellison-1952.jpg?w=600&q=60",
      summary:
        "The narrator of the novel, a man who is never named but believes he is “invisible” to others socially, tells the story of his move from the South to college and then to New York City. In each location he faces extreme adversity and discrimination, falling into and out of work, relationships, and questionable social movements in a wayward and ethereal mindset",
      rating: "8.9",
    },
  ]);
  const navigate = useNavigate();
  const styles = {
    backgroundImage: "linear-gradient(to right, #00b09b, #96c93d)",
  };
  return (
    <div className="App">
      <AppBar position="static" sx={styles}>
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/books-list")} color="inherit">
            Book List
          </Button>
          <Button onClick={() => navigate("/Add-book")} color="inherit">
            Add Book
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books-list"
          element={<BooksOrder booklist={booklist} setBooklist={setBooklist} />}
        />
        <Route
          path="/books-list/edit/:id"
          element={<EditBook booklist={booklist} setBooklist={setBooklist} />}
        />
        <Route
          path="/Add-book"
          element={<AddBook booklist={booklist} setBooklist={setBooklist} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <div>
      <Boxes />
      <br />
      <Chart />
      <Pie />
      <Books />
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function Boxes() {
  return (
    <div className="boxes">
      <div className="box1">
        <h2>Total Books</h2>
        <h2>645</h2>
      </div>
      <div className="box2">
        <h2>Books Borrowed</h2>
        <h2>148</h2>
      </div>
      <div className="box3">
        <h2>Users</h2>
        <h2>125</h2>
      </div>
      <div className="box4">
        <h2>Books Generes</h2>
        <h2>8</h2>
      </div>
    </div>
  );
}

function Books() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="new">
        <h2>New Arrived Books</h2>
      </div>
      <div className="booklist">
        <div className="book1">
          <img
            src="data:image/jpeg;base64,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"
            alt="energize your mind"
          />
          <h3>energize your mind</h3>
          <p>
            Take charge of your mind. Be in charge of your life. In this book,
            bestselling author and life coach Gaur Gopal Das decodes how the
            mind works
          </p>
          <p>Rating: 8.2</p>
        </div>
        <div className="book2">
          <img
            src="data:image/jpeg;base64,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"
            alt="World Class in India"
          />
          <h3>World Class in India</h3>
          <p>
            World Class in India presents the stories of select Indian companies
            that have been able to spur their managers to overcome their
            resistance to change and begin the journey to becoming world-class
          </p>
          <p>Rating: 8.5</p>
        </div>
        <div className="book3">
          <img
            src="https://m.media-amazon.com/images/I/51mWQVLf2wL._SX378_BO1,204,203,200_.jpg"
            alt="E-World"
          />
          <h3>E-World</h3>
          <p>
            E-world is a computer science series based on the feedback received
            from users across the country. This series is meant for Classes 1 to
            8. It is a humble effort to provide comprehensive learning and
            understanding of basic concepts and applications of computers
          </p>
          <p>Rating: 7.5</p>
        </div>
        <div className="book4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7OXRhXC8MephO7XbJIwUlmCD6CsXxHfm5w&usqp=CAU"
            alt="The Greatness Guide 2"
          />
          <h3>The Greatness Guide 2</h3>
          <p>
            The Greatness Guide 2 is a series of 2000-year-old computer science
            books that have been written by the author of the book. The books
            are written in English, and the books are written in Spanish
          </p>
          <p>Rating: 8.4</p>
        </div>
        <div className="book5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFAg8eFd6S1wLSQF0DMhlbNWkGfANdtw5mw&usqp=CAU"
            alt="Browse the Wrold"
          />
          <h3>Browse the Wrold</h3>
          <p>
            Browse the Wrold is a series of 2000-year-old computer science books
            that have been written by the author of the book. The books are
            written in English, and the books are written in Spanish
          </p>
          <p>Rating: 6.5</p>
        </div>
        <br></br>
        <button onClick={() => navigate("/books-list")} className="btn">More Info</button>
      </div>
    </div>
  );
}

export default App;
