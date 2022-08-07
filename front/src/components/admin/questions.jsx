import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
 

const Questions = ({
  currentQuestions,
  updateQuestions,
  questions,
  editQuestion,
  removeQuestion,
}) => {
  const [question, setQuestion] = useState({
    title: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const handleQuestionChange = (e) => {
    setQuestion({
      title: e.target.value,
    });
  };

  const clickEdit = (idx, question) => {
    setIsEdit(true);
    setEditIndex(idx);
    setQuestion(question);
  };

  const submitQuestion = () => {
    console.log('question',question)
    updateQuestions(question);
    setQuestion({
      title: "",
    });
  };
  const submitEditedQuestion = () => {
    editQuestion(editIndex, question);
    setIsEdit(false);
    setQuestion({
      title: "",
    });
  };

  return (
    <div>
      {questions?.length ? <h4>Answers</h4> : ""}
      <ul>
        {questions?.map((question, idx) => (
          <li className="mb-1" key={idx} style={{textAlign:"left"}}>
            {question.title}
            <span
              style={{ color: "darkred", cursor: "pointer", marginLeft: "5px" }}
              onClick={() => removeQuestion(idx)}
            >
              <i className="fas fa-trash" />
            </span>
            <span
              style={{color: "#cfb10d", cursor: "pointer", marginLeft: "5px" }}
              onClick={() => clickEdit(idx, question)}
            >
              <i className="fas fa-edit" />
            </span>
          </li>
        ))}
      </ul>
      <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
        <Form.Label>Answer</Form.Label>
        <Form.Control
          onChange={handleQuestionChange}
          value={question.title}
          type="text"
          placeholder="Enter Name"
          name="question"
        />
      </Form.Group>
      <div style={{ textAlign: "right" }}>
        <Button
          size="sm"
          variant="success"
          type="button"
          onClick={isEdit ? submitEditedQuestion : submitQuestion}
        >
          {isEdit ? "Update Question" : "Add option"}
        </Button>
      </div>
    </div>
  );
};

export default Questions;
