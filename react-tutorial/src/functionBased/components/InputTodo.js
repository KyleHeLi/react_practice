import React, { useState } from "react";
// import { IconContext } from "react-icons";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  // // Example
  // const [inputText, setInputText] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  // const onChange = (e) => {
  //   setInputText((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log("submitted");
  // };

  // return (
  //   <>
  //     <form onSubmit={handleChange} className="form-container">
  //       <input
  //         type="text"
  //         className="input-text"
  //         placeholder="Add first name"
  //         value={inputText.firstName}
  //         name="firstName"
  //         onChange={onChange}
  //       />
  //       <input
  //         type="text"
  //         className="input-text"
  //         placeholder="Add last name"
  //         value={inputText.lastName}
  //         name="lastName"
  //         onChange={onChange}
  //       />

  //       <button className="input-submit">Submit</button>
  //     </form>
  //     <h2>{inputText.firstName}</h2>
  //     <h2>{inputText.lastName}</h2>
  //   </>
  // );

  // This is similar to this.state.title and this.setState in our class component.
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
      {/* <IconContext.Provider
        value={{
          color: "darkcyan",
          style: { fontSize: "20px", color: "#ff0000" },
          className: "submit-icon",
        }}
      >
        <button className="input-submit">
          <FaPlusCircle />
        </button>
      </IconContext.Provider> */}
    </form>
  );
};

export default InputTodo;
