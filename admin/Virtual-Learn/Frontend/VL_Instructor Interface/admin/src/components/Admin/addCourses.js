import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../CSS/addCourse.css';

import UploadVideo from './upload';
import QuestionAnswer from './QnA';
import Certificate from './certificate';
import axios from 'axios';

function AddCourses() {
  const [uploadVideo, setUploadVideo] = useState();
  const [QnA, setQnA] = useState();
  const [certificateData, setCertificateData] = useState();
  const [publish, setPublish] = useState({});

  const videoUpload = (formValues) => {
    setUploadVideo(formValues);
  };

  const test = (testData) => {
    setQnA(testData);

    console.log('test', testData);
  };

  const certificate = (Certificate) => {
    setCertificateData(Certificate);
  };

  function PublishToWeb() {
    console.log(uploadVideo[2]);
    const date = new Date();
    console.log(
      JSON.stringify({
        courseName: uploadVideo[1] && uploadVideo[1].Title,
        courseCategory: uploadVideo[1] && uploadVideo[1].Category,
        description: uploadVideo[1] && uploadVideo[1].Description,
        chapterName: uploadVideo[0] && uploadVideo[0],
        chaptersNumber: uploadVideo[0] && uploadVideo[0].length,
        questionsAndAnswers: QnA && QnA,
        chapterUrl: uploadVideo[2] && uploadVideo[2],
        AddedOn: {
          date: `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`,
          time: `${date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}`,
        },
      })
    );

    console.log(
      'data to be uploaded',
      JSON.stringify({
        chapter_video: uploadVideo[2] && uploadVideo[2],
        course_name: uploadVideo[1] && uploadVideo[1].Title,
        lesson_name: uploadVideo[0] && uploadVideo[0],
        chapterNum: 1,
        lessonNum: 1,
      })
    );

    axios
      .post(
        'https://virtuallearn01.herokuapp.com/api/v1/uploadChapters',
        JSON.stringify({
          chapter_video: { url: uploadVideo[2] && uploadVideo[2] },
          course_name: uploadVideo[1] && uploadVideo[1].Title,
          lesson_name: uploadVideo[0] && uploadVideo[0],
          chapterNum: 1,
          lessonNum: 1,
          courseCategory: 'Programming',
        })
      )
      .then((result) => {
        console.log('Result', result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {' '}
      <div className="dashboard-topbar">
        <div className="dashboard-topbar-title">Add Courses</div>

        <button className="publishToWeb-button" onClick={PublishToWeb}>
          <div> Publish to web</div>
          <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <div className="dashboard-topbar">
              <div className="dashboard-topbar-title">Dashboard</div>
              <div className="dashboard-topbar-profile">
                <div className="dashboard-topbar-profileImg">
                  <img
                    src={require('../../images/Screenshot 2022-05-16 104609.png')}
                    alt="Virtual Learn Logo"
                  />
                </div>
                <div>Manjay Guptha</div>
              </div>
            </div>
            <path
              d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      <div className="background">
        <div className="addCourses-container">
          {' '}
          <Tabs>
            <TabList>
              <Tab>Video Upload</Tab>
              <Tab>Question and Answer</Tab>
              <Tab>Certificate Template</Tab>
            </TabList>

            <TabPanel>
              <UploadVideo videoUpload={videoUpload} />
            </TabPanel>
            <TabPanel>
              <QuestionAnswer test={test} />
            </TabPanel>
            <TabPanel>
              <Certificate certificate={certificate} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
