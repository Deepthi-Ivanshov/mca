import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import TextareaAutosize from 'react-textarea-autosize';
import ToggleSwitch from '../Misc/ToggleSwitch';

function Items({ currentItems }) {
  return <>{currentItems && currentItems.map((item) => <div>{item}</div>)}</>;
}

function PaginatedItems({ itemsPerPage, props }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [chapterCount, setchapterCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('Sample Text');

  const textAreaHandler = (event) => {
    setValue(event.target.value);
  };

  const quizForm = [];

  for (let i = 0; i < chapterCount; i++) {
    quizForm.push(
      <div className="quizQuestions">
        <div>
          <div>
            {' '}
            <Accordion>
              <AccordionItem>
                <div className="QnA-question">
                  <div className="QnA-questionNum">Question {i + 1}</div>
                  <div className="QnA-HeaderContent">
                    <div className="QnA-questionTitle">
                      <TextareaAutosize
                        name={'question_' + i}
                        className="QnA-QuestionInput"
                        onChange={textAreaHandler}
                      />
                    </div>
                    <div className="QnA-Options">
                      <div>
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
                      </div>
                      <AccordionItemButton>
                        <div onClick={() => setToggle(!toggle)}>
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
                      </AccordionItemButton>
                    </div>
                  </div>
                </div>

                <AccordionItemPanel>
                  <div className="QnA-multiChoice">
                    <div className="QnA-multiChoiceOption ">
                      <div>
                        {' '}
                        <TextareaAutosize
                          name="Option_1"
                          className="QnA-MCQOptions"
                          onChange={textAreaHandler}
                        />
                      </div>
                      <div>
                        <ToggleSwitch label="Option_1" />
                      </div>
                    </div>
                    <div className="QnA-multiChoiceOption">
                      <div>
                        {' '}
                        <TextareaAutosize
                          name="Option_2"
                          className="QnA-MCQOptions"
                          onChange={textAreaHandler}
                        />
                      </div>
                      <div>
                        <ToggleSwitch label="Option_2" />
                      </div>
                    </div>
                    <div className="QnA-multiChoiceOption">
                      <div>
                        {' '}
                        <TextareaAutosize
                          name="Option_3"
                          className="QnA-MCQOptions"
                          onChange={textAreaHandler}
                        />
                      </div>
                      <div>
                        <ToggleSwitch label="Option_3" />
                      </div>
                    </div>
                    <div className="QnA-multiChoiceOption">
                      <div>
                        {' '}
                        <TextareaAutosize
                          name="Option_4"
                          className="QnA-MCQOptions"
                          onChange={textAreaHandler}
                        />
                      </div>
                      <div>
                        <ToggleSwitch label="Option_4" />
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(quizForm.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(quizForm.length / itemsPerPage));
    chapterCountToItems();
  }, [itemOffset, itemsPerPage, props, chapterCount]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % quizForm.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const chapterCountToItems = () => {
    setchapterCount(props);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="PREVIOUS"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
