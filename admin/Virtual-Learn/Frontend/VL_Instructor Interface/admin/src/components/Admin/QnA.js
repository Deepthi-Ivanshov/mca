import React, { useEffect, useState } from 'react';
import '../../CSS/addCourse.css';
import ToggleSwitch from '../Misc/ToggleSwitch';
import {
  Accordion,
  AccordionItem,
  AccordionItemBody,
} from 'react-accordion-container';

function QuestionAnswer({ test }) {
  const [formValues, setFormValues] = useState([
    { question: '', option1: '', option2: '', option3: '', option4: '' },
  ]);
  const [chapter, setChapter] = useState({
    chapter: '',
  });
  const [edit, setEdit] = useState();
  const [answer, setAnswer] = useState('');
  const [allQnA, setAllQnA] = useState([]);

  const childToParent = (childdata) => {
    setAnswer([...answer, childdata]);
    answer &&
      answer.length > 0 &&
      answer.map((el) =>
        el.question ? console.log('y', el.question) : console.log('no')
      );
  };

  console.log('answer', answer);
  console.log('form', formValues);
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { question: '', option1: '', option2: '', option3: '', option4: '' },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    setAllQnA([...allQnA, formValues, chapter, answer]);
    alert(JSON.stringify(formValues));
    alert(JSON.stringify(chapter));
    alert(JSON.stringify(answer));
  };

  useEffect(() => {
    test(allQnA);
  });

  function EditField(index) {
    setEdit(index);
  }

  function chapterHandler(event) {
    setChapter({ chapter: event.target.value });
  }
  console.log(chapter);
  return (
    <div className="questionAnswer">
      <div className="questionAnswerContent">
        <form onSubmit={handleSubmit}>
          <div className="QnAChapter">
            <label>
              <div>Select Chapter Name</div>
              <select name="chapter" onChange={chapterHandler}>
                <option value="Chapter 1 - Setting up a new project">
                  Chapter 1 - Setting up a new project
                </option>
                <option value="Chapter 2 - ReactJS">Chapter 2 - ReactJS</option>
                <option value=" Chapter 3 - Web design">
                  Chapter 3 - Web design
                </option>
              </select>
            </label>
          </div>
          <div>
            {formValues.map((element, index) => (
              <div
                className="quizContainer"
                key={index}
                onClick={() => EditField(index)}
              >
                <div className="Quizcontainer-questionHeader">
                  <Accordion>
                    <div className="QnA-QuestionHeaderContent">
                      <div className="QnA-questionNum">
                        Question {index + 1}
                      </div>
                      <div>
                        {edit === index ? (
                          <input
                            type="text"
                            name="question"
                            placeholder="Question"
                            value={element.question || ''}
                            onChange={(e) => handleChange(index, e)}
                            className="QnA-QuestionInput chapternameInput"
                          />
                        ) : (
                          <div className="QnA-Question ">
                            {element.question}
                          </div>
                        )}
                      </div>
                    </div>
                    <AccordionItem>
                      {({ isActive, onClick }) => (
                        <div>
                          <div>
                            <div className="add-delete-buttons">
                              <div role="button" onClick={onClick}>
                                <button
                                  onClick={(e) => e.preventDefault()}
                                  className="QnA-Options-expand1"
                                >
                                  {isActive ? (
                                    <div>
                                      <svg
                                        width={37}
                                        height={36}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x={3.199}
                                          y={16.5}
                                          width={28.851}
                                          height={3}
                                          rx={1.5}
                                          fill="#111"
                                        />
                                      </svg>
                                    </div>
                                  ) : (
                                    <div>
                                      <svg
                                        width={37}
                                        height={36}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M29.013 19.5h-9.11v9h-3.038v-9h-9.11v-3h9.11v-9h3.037v9h9.111v3z"
                                          fill="#000"
                                        />
                                      </svg>
                                    </div>
                                  )}
                                </button>
                              </div>

                              <div className="expand-delete-buttons">
                                <button
                                  type="button"
                                  className="button remove QnA-Options-expand1"
                                  onClick={() => removeFormFields(index)}
                                >
                                  <svg
                                    width={37}
                                    height={36}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.296 13.5v15H12.148v-15h12.148zm-2.278-9h-7.593L12.907 6H7.592v3h21.259V6h-5.315l-1.518-1.5zm5.314 6H9.111v18c0 1.65 1.366 3 3.037 3h12.148c1.67 0 3.037-1.35 3.037-3v-18z"
                                      fill="#000"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="quiz-options">
                              <AccordionItemBody>
                                <div className="QnA-multiChoice">
                                  <div className="QnA-Options">
                                    {edit === index ? (
                                      <input
                                        type="text"
                                        name="option1"
                                        placeholder="option 1"
                                        value={element.option1 || ''}
                                        onChange={(e) => handleChange(index, e)}
                                      />
                                    ) : (
                                      <div className="QnA-Options-Text">
                                        {element.option1}
                                      </div>
                                    )}
                                    <ToggleSwitch
                                      label="option1"
                                      index={index}
                                      childToParent={childToParent}
                                    />
                                  </div>
                                  <div className="QnA-Options">
                                    {' '}
                                    {edit === index ? (
                                      <input
                                        type="text"
                                        name="option2"
                                        value={element.option2 || ''}
                                        placeholder="option 2"
                                        onChange={(e) => handleChange(index, e)}
                                      />
                                    ) : (
                                      <div className="QnA-Options-Text">
                                        {element.option2}
                                      </div>
                                    )}
                                    <ToggleSwitch
                                      label="option2"
                                      index={index}
                                      childToParent={childToParent}
                                    />
                                  </div>{' '}
                                  <div className="QnA-Options">
                                    {edit === index ? (
                                      <input
                                        type="text"
                                        name="option3"
                                        value={element.option3 || ''}
                                        placeholder="option 3"
                                        onChange={(e) => handleChange(index, e)}
                                      />
                                    ) : (
                                      <div className="QnA-Options-Text">
                                        {element.option3}
                                      </div>
                                    )}
                                    <ToggleSwitch
                                      label="option3"
                                      index={index}
                                      childToParent={childToParent}
                                    />
                                  </div>{' '}
                                  <div className="QnA-Options">
                                    {edit === index ? (
                                      <input
                                        type="text"
                                        name="option4"
                                        value={element.option4 || ''}
                                        placeholder="option 4"
                                        onChange={(e) => handleChange(index, e)}
                                      />
                                    ) : (
                                      <div className="QnA-Options-Text">
                                        {element.option4}
                                      </div>
                                    )}
                                    <ToggleSwitch
                                      label="option4"
                                      index={index}
                                      childToParent={childToParent}
                                    />
                                  </div>
                                </div>
                              </AccordionItemBody>
                            </div>
                          </div>
                        </div>
                      )}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
            <div className="button-section">
              <button
                className="addNewQuestion"
                type="button"
                onClick={() => addFormFields()}
              >
                <div> Add New +</div>
              </button>
              <button
                className="saveButton QnA-Save QnA-Position"
                type="submit"
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionAnswer;
