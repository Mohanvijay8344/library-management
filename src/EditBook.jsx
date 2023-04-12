import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";



export function EditBook({setBooklist,booklist}) {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const [setBooklist,booklist] = useState([]);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [id]);

  const validationSchema = yup.object({
    title: yup
      .string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters long"),
    author: yup.string().required("Author is required"),
    summary: yup
      .string()
      .required("Summary is required")
      .min(6, "Summary must be at least 6 characters long"),
    image: yup.string().required("Image is required").url(),
    rating: yup.number().required("Rating is required").min(0).max(10),
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: "",
        author: "",
        summary: "",
        image: "",
        rating: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (updatedBook) => {
        try {
          const response = await axios.put(
            `http://localhost:5173/books-list/edit/${id}`,
            updatedBook
          );
          console.log(response.data);
          navigate("/books-list");
        } catch (error) {
          console.error(error);
        }
      },
    });

  if (!book) {
    return <h1>Loading...</h1>;
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <TextField
        helperText={touched.title && errors.title ? errors.title : null}
        variant="filled"
        id="outlined-error-helper-text"
        label="Title"
        error={touched.title && errors.title}
        name="title"
        onBlur={handleBlur}
        value={values.title || book.title}
        type="text"
        placeholder="Title"
        onChange={handleChange}
      />

      <TextField
        helperText={touched.author && errors.author ? errors.author : null}
        variant="filled"
        id="outlined-error-helper-text"
        label="Author"
        error={touched.author && errors.author}
        name="author"
        onBlur={handleBlur}
        value={values.author || book.author}
        type="text"
        placeholder="Author"
        onChange={handleChange}
      />

      <TextField
        helperText={touched.summary && errors.summary ? errors.summary : null}
        variant="filled"
        id="outlined-error-helper-text"
        label="Summary"
        error={touched.summary && errors.summary}
        name="summary"
        onBlur={handleBlur}
        value={values.summary || book.summary}
        type="text"
        placeholder="Summary"
        onChange={handleChange}
      />      
      <TextField
        helperText={touched.rating && errors.rating ? errors.rating : null}
        variant="filled"
        id="outlined-error-helper-text"
        label="Rating"
        error={touched.rating && errors.rating}
        name="rating"
        onBlur={handleBlur}
        value={values.rating}
        type="number"
        placeholder="Rating"
        onChange={handleChange}
      />

      <Button variant="contained" type="submit">
        Updates
      </Button>
    </form>
  );
}

