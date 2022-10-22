import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemBody,
} from 'react-accordion-container';
import SubChapter from './subChapter';

function UploadVideo({ videoUpload }) {
  const [formValues, setFormValues] = useState([{ chapter: '' }]);
  const [chapter, setChapter] = useState({
    Title: '',
    Category: '',
    Description: '',
  });

  const [subChapters, setSubChapters] = useState([]);

  const [datafromCloudinary, setDatafromCloudinary] = useState();
  const [allData, setAllData] = useState([]);

  const cloudinaryURLData = (childdata, subChapter) => {
    setDatafromCloudinary([
      ...datafromCloudinary,
      formValues,
      {
        subChapter,
        url: childdata,
      },
    ]);
    setSubChapters([...subChapters, subChapter]);
    alert(JSON.stringify(subChapter));
    alert(JSON.stringify(childdata));
  };

  console.log('form', formValues);
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  useEffect(() => {
    console.log('cloud', datafromCloudinary);
  });

  let addFormFields = (event) => {
    event.preventDefault();
    setFormValues([...formValues, { chapter: '' }]);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    setChapter({ Title: '', Category: '', Description: '' });
    setAllData([...allData, formValues, chapter, datafromCloudinary]);

    alert(JSON.stringify(formValues));
    alert(JSON.stringify(chapter));
    alert(JSON.stringify(datafromCloudinary));
    alert(JSON.stringify(subChapters));
  };

  useEffect(() => {
    videoUpload(allData);
  });

  const handleChangeChapter = (event) => {
    setChapter({ ...chapter, [event.target.name]: event.target.value });
  };

  console.log('chapter', chapter);

  return (
    <div className="addCourse">
      <div className="questionAnswer">
        <div className="questionAnswerContent">
          <form onSubmit={handleSubmit}>
            <div className="titleCategory">
              <label>
                <div>Video Title</div>
                <input
                  type="text"
                  name="Title"
                  value={chapter.Title}
                  onChange={handleChangeChapter}
                  required
                />
              </label>
              <label>
                <div>Video Category</div>
                <input
                  type="text"
                  name="Category"
                  value={chapter.Category}
                  className="videoCategory"
                  onChange={handleChangeChapter}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Add Discription / Overview
                <div className="description">
                  <div className="Description-Options">
                    <div className="DescriptionOptions">
                      <div className="bold">
                        {' '}
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.25 11.8A3.68 3.68 0 0017 9a3.93 3.93 0 00-3.86-4H6.65v14h7a3.739 3.739 0 003.7-3.78v-.12a3.64 3.64 0 00-2.1-3.3zM8.65 7h4.2a2.09 2.09 0 012 1.3 2.09 2.09 0 01-1.37 2.61c-.205.06-.417.09-.63.09h-4.2V7zm4.6 10h-4.6v-4h4.6a2.09 2.09 0 012 1.3 2.09 2.09 0 01-1.37 2.61c-.205.06-.417.09-.63.09z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div className="itallics">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.76 9h2l-2.2 10h-2l2.2-10zm1.68-4a1 1 0 100 2 1 1 0 000-2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div className="underline">
                        {' '}
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 20v2H5v-2h14zm-3-6.785a4 4 0 01-5.74 3.4A3.75 3.75 0 018 13.085v-8.08H6v8.21a6 6 0 008 5.44 5.85 5.85 0 004-5.65v-8h-2v8.21zM16 5h2-2zM8 5H6h2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div className="strike-through">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 12.203h18v1.5h-4.366c.237.497.357 1.042.35 1.593a3.25 3.25 0 01-1.315 2.7A5.551 5.551 0 0112.203 19a6.443 6.443 0 01-2.624-.54 4.464 4.464 0 01-1.892-1.487 3.668 3.668 0 01-.67-2.156v-.113h.287v-.001H9.02v.114a2.183 2.183 0 00.854 1.83 3.69 3.69 0 002.329.68 3.388 3.388 0 002.076-.546 1.734 1.734 0 00.701-1.467 1.696 1.696 0 00-.646-1.434 3.007 3.007 0 00-.275-.177H3v-1.5zM16.345 7.06a4.181 4.181 0 00-1.721-1.514A5.627 5.627 0 0012.11 5a5.16 5.16 0 00-3.364 1.062A3.363 3.363 0 007.44 8.768a3.23 3.23 0 00.322 1.428h2.596c-.083-.053-.185-.105-.252-.16a1.606 1.606 0 01-.653-1.3 1.798 1.798 0 01.688-1.512 3.13 3.13 0 011.97-.552 3.048 3.048 0 012.106.669 2.35 2.35 0 01.736 1.832v.114h2.003v-.114a3.9 3.9 0 00-.611-2.113z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div className="font-color">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.2 13.494s-3.6 3.9-3.6 6.3a3.65 3.65 0 107.3.1v-.1c0-2.4-3.7-6.3-3.7-6.3zm-1.47-1.357l.669-.724L12.1 5h-2l-5 14h2l1.43-4h2.943a24.428 24.428 0 012.253-2.863h.004zM11.1 7.8l1.86 5.2H9.244L11.1 7.8z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div className="highlight">
                        {' '}
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.918 12.24l7.748-5.39 1.179 1.296-6.094 7.208-2.833-3.114zm-2.33.412l4.535 4.983a.934.934 0 001.395-.091l7.451-8.813a.908.908 0 00.022-1.198L18.478 4.77a.908.908 0 00-1.195-.09l-9.474 6.59a.933.933 0 00-.222 1.38zm-4.794 5.875l5.617.973 1.48-1.347-3.03-3.328-4.067 3.702z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div className="emoji">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.991 3a9 9 0 10.018 18 9 9 0 00-.018-18zM12 19a7 7 0 110-14 7 7 0 010 14zm3.105-5.2h1.503a4.946 4.946 0 01-9.216 0h1.503a3.578 3.578 0 006.21 0zM7.5 9.75a1.35 1.35 0 112.7 0 1.35 1.35 0 01-2.7 0zm6.3 0a1.35 1.35 0 112.7 0 1.35 1.35 0 01-2.7 0z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="DescriptionOptions">
                      <div>
                        <svg
                          width={32}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 18h18v-2H3v2zm0-7v2h18v-2H3zm0-5v2h18V6H3zM28 14.5l4-5h-8l4 5z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={32}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 18h18v-2H3v2zm0-7v2h18v-2H3zm0-5v2h18V6H3zM28 14.5l4-5h-8l4 5z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={32}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 18h18v-2H3v2zm0-7v2h18v-2H3zm0-5v2h18V6H3zM28 14.5l4-5h-8l4 5z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={32}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 18h18v-2H3v2zm0-7v2h18v-2H3zm0-5v2h18V6H3zM28 14.5l4-5h-8l4 5z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        {' '}
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 9v6l3-3-3-3zm0 10h18v-2H3v2zM3 7h18V5H3v2zm6 4h12V9H9v2zm0 4h12v-2H9v2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 12l3 3V9l-3 3zm0 7h18v-2H3v2zM3 7h18V5H3v2zm6 4h12V9H9v2zm0 4h12v-2H9v2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="DescriptionOptions">
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.2 11l3.8 5H6l3-3.9 2.1 2.7L14 11h.2zm-5.7 0c.8 0 1.5-.7 1.5-1.5S9.3 8 8.5 8 7 8.7 7 9.5 7.7 11 8.5 11zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2 2.8V6H4v12h16V8.8z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 17H7A5 5 0 017 7h4v2H7a3 3 0 100 6h4v2zm6-10h-4v2h4a3 3 0 010 6h-4v2h4a5 5 0 100-10zm-1 4H8v2h8v-2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7.6L14.4 3H7zm10 16H7V5h6v4h4v10z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        {' '}
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 8v8H5V8h10zm2 2.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l2.29 2.29a1 1 0 001.71-.71V8.91a1 1 0 00-1.71-.71L17 10.5z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        {' '}
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4 9.4c-1.7.3-3.2.9-4.6 2L3 8.5v7h7l-2.7-2.7c3.7-2.6 8.8-1.8 11.5 1.9.2.3.4.5.5.8l1.8-.9c-2.2-3.8-6.4-5.9-10.7-5.2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6 9.4c1.7.3 3.2.9 4.6 2L21 8.5v7h-7l2.7-2.7C13 10.1 7.9 11 5.3 14.7c-.2.3-.4.5-.5.8L3 14.6c2.1-3.8 6.3-5.9 10.6-5.2z"
                            fill="#000"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <textarea
                    name="Description"
                    value={chapter.Description}
                    onChange={handleChangeChapter}
                  ></textarea>
                </div>
              </label>
            </div>

            <div>
              <div>Video Upload Section</div>
              {formValues.map((element, index) => (
                <div className="quizContainer" key={index}>
                  <div className="Quizcontainer-questionHeader">
                    <Accordion>
                      <div className="QnA-QuestionHeaderContent">
                        <div className="chapterName">
                          <label>Chapter Name </label>
                          <input
                            type="text"
                            name="chapter"
                            value={element.chapter || ''}
                            onChange={(e) => handleChange(index, e)}
                            className="chapternameInput"
                          />
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
                                          width={36}
                                          height={36}
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18 12l-9 9 2.115 2.115L18 16.245l6.885 6.87L27 21l-9-9z"
                                            fill="#000"
                                          />
                                        </svg>
                                      </div>
                                    ) : (
                                      <div>
                                        <svg
                                          width={36}
                                          height={36}
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.885 12.885L18 19.755l-6.885-6.87L9 15l9 9 9-9-2.115-2.115z"
                                            fill="#000"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                  </button>
                                </div>
                              </div>
                              <div className="quiz-options">
                                <AccordionItemBody>
                                  <div className="DropzoneContent">
                                    <div>
                                      <SubChapter
                                        onClick={onClick}
                                        isActive={isActive}
                                        cloudinaryURLData={cloudinaryURLData}
                                        title={chapter.Title}
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
                  onClick={(event) => addFormFields(event)}
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
      <form onSubmit={handleSubmit}>
        <fieldset></fieldset>
        <fieldset>
          <div className="videoUploadSection">
            <div className="addVideos-header"></div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default UploadVideo;
