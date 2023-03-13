import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



export function EditBook() {
  const { id } = useParams();
  const [bookl, setBookl] = useState([]); 
  return(
    <div>
      {bookl ? <EditText bookl={bookl}/> : <h1>Wait a Minute...</h1>}
    </div>
  );
  }
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [summary, setSummary] = useState("");
  // const [image, setImage] = useState("");
  // const [rating, setRating] = useState("");

function EditText({ bookl, setBookl}){
  const navigate = useNavigate();

  const validationSchema = yup.object({
    title: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    author: yup.string().required("author is required"),
    summary: yup
      .string()
      .required("summary is required")
      .min(6, "summary must be at least 6 characters long"),
    image: yup.string().required("Image is required").url(),
    rating: yup.number().required("Rating is required").min(0).max(10),
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: bookl.title,
        author: bookl.author,
        summary: bookl.summary,
        image: bookl.image,
        rating: bookl.rating,
      },
      validationSchema: validationSchema,
      onSubmit: (newBook) => {
        addbook(newBook);
      },
    });
    navigate("/books-list");
  

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <TextField
        helperText={touched.title && errors.title ? errors.title : null}
        variant="filled"
        id="outlined-error-helper-text"
        label="Name"
        error={touched.title && errors.title}
        name="title"
        onBlur={handleBlur}
        value={values.title}
        type="text"
        placeholder="Name"
        onChange={handleChange}
      />
      <TextField
        helperText={touched.author && errors.author ? errors.author : null}
        variant="filled"
        error={touched.author && errors.author}
        id="outlined-error-helper-text"
        label="author"
        name="author"
        onBlur={handleBlur}
        value={values.author}
        t
        ype="text"
        placeholder="Author"
        onChange={handleChange}
      />
      <TextField
        helperText={touched.image && errors.image ? errors.image : null}
        variant="filled"
        error={touched.image && errors.image}
        id="outlined-error-helper-text"
        label="image"
        name="image"
        onBlur={handleBlur}
        value={values.image}
        type="text"
        placeholder="Image"
        onChange={handleChange}
      />
      <TextField
        helperText={touched.summary && errors.summary ? errors.summary : null}
        variant="filled"
        error={touched.summary && errors.summary}
        id="outlined-error-helper-text"
        label="summary"
        name="summary"
        onBlur={handleBlur}
        value={values.summary}
        type="text"
        placeholder="Summary"
        onChange={handleChange}
      />
      <TextField
        helperText={touched.rating && errors.rating ? errors.rating : null}
        variant="filled"
        error={touched.rating && errors.rating}
        id="outlined-error-helper-text"
        label="rating"
        name="rating"
        onBlur={handleBlur}
        value={values.rating}
        type="text"
        placeholder="Rating"
        onChange={handleChange}
      />
      <Button variant="contained" type="submit" onSubmit={handleSubmit}>
        Update
      </Button>
    </form>
  )
}
