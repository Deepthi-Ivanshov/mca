import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AccordionItemBody } from 'react-accordion-container';
import DropFiles from './videoUpload';

function SubChapter({ cloudinaryURLData, title }) {
  const [count, setCount] = useState(0);
  // const [datafromCloudinary, setDatafromCloudinary] = useState([]);
  // const [subChapter, setSubChapter] = useState([]);
  const [datafromCloudinary, setDatafromCloudinary] = useState('');
  const [subChapter, setSubChapter] = useState('');

  const childToParent = (childdata, chapter) => {
    // setDatafromCloudinary([...datafromCloudinary, childdata]);
    // setSubChapter([...subChapter, chapter]);
    setDatafromCloudinary(childdata);
    setSubChapter(chapter.Subchapter);
  };

  useEffect(() => {
    console.log('cloud dataa', datafromCloudinary);
    console.log('sub chapterr', subChapter);
    console.log('Title', title);
  }, [datafromCloudinary, subChapter, title]);

  function PublishToWeb() {
    console.log(
      JSON.stringify({
        chapter_video: datafromCloudinary,
        course_name: title,
        lesson_name: subChapter,
        chapterNum: parseInt(1),
        lessonNum: parseInt(count + 1),
      })
    );

    axios
      .post('https://virtuallearn01.herokuapp.com/api/v1/uploadChapters', {
        chapter_video: datafromCloudinary,
        course_name: title,
        lesson_name: subChapter,
        chapterNum: 1,
        lessonNum: count + 1,
      })
      .then((result) => {
        console.log('Result', result);
        alert(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function multipleFiles() {
    const elements = [];

    for (var i = 0; i <= count; i++) {
      elements.push(
        <div className="dropFiles-container">
          <div className="dropFiles-subChapter">
            <DropFiles childToParent={childToParent} />

            {/* <div className="subChapter">
            <button
              onClick={(e) => {
                e.preventDefault();
                setCount(count + 1);
              }}
            >
              Click me
            </button>

            <label>Sub Chapter Name</label>
            <input
              name="Subchapter"
              onChange={(e) => handleChangeSubChapter(i, e)}
              value={subChapter.SubChapter}
              className="chapternameInput"
              required
            />
          </div> */}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              PublishToWeb();
              setCount(count + 1);
              cloudinaryURLData(datafromCloudinary, subChapter);
            }}
            className="Next-button"
          >
            Next
          </button>
        </div>
      );
    }

    return elements.map((videoDropZone, index) => {
      return <div key={index}>{videoDropZone}</div>;
    });
  }
  return (
    <div>
      <div>
        <div className="add-delete-buttons"></div>
        <div className="quiz-options">
          <AccordionItemBody>
            <div className="DropzoneContent">
              <div>{multipleFiles()}</div>
            </div>
          </AccordionItemBody>
        </div>
      </div>
    </div>
  );
}

export default SubChapter;
