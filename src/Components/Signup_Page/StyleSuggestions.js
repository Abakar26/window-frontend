/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import signupBtn from '../../images/svg/signup_btn.svg';
import arrow from '../../images/svg/blue_arrow.svg';
import SkipButton from '../UI/SkipButton';
import { API_URL } from '../../Constants/Constants';

const StyleSuggestions = (props) => {
  const [text, setText] = useState('');
  const [over, setOver] = useState(false);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const fetchQuestionsAndAnswers = () => {
    axios.get(`${API_URL}api/v1/questions`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
    }).then((response) => {
      const questions = response.data;
      if (questions && questions.length > 0) {
        setQuestion(questions[0]);
        axios.get(`${API_URL}api/v1/questions/${questions[0].id}/answers`, {
          headers: {
            Authorization: localStorage.getItem('authorization'),
          },
        }).then((myResponse) => {
          const answers = myResponse.data;
          if (answers && answers.length > 0) {
            setAnswer(answers[0]);
            setText(answers[0].statement);
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  const saveAnswer = () => {
    axios.post(`${API_URL}api/v1/questions/${question.id}/answers`, {
      statement: text,
    }, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
    }).catch((error) => {
      console.log(error);
    });
  };

  const updateAnswer = () => {
    axios.patch(`${API_URL}api/v1/questions/${question.id}/answers/${answer.id}`, {
      statement: text,
    }, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    fetchQuestionsAndAnswers();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setSwitchSignup(true);
    if (text !== '') {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [text]);

  const handleNext = () => {
    if (text !== '' && question !== '') {
      if (answer === '') {
        saveAnswer();
      } else {
        updateAnswer();
      }
    }
    navigate('/welcome');
  };

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleNavigation = () => {
    navigate('/welcome');
  };

  return (
    <div className=" h-[900px] flex flex-col items-center px-0 pt-[171px]">
      <span className="signup_welcome_container mb-[13px] window_font text-center">
        {question !== '' ? question.statement : 'Anything you would never wear?'}
      </span>
      <p className="signup_text_aesthetic  mb-[25px] window_font">Final Question! Write it down below.</p>
      <textarea
        className="style_Identity focus:outline-none max-w-[374px] w-full h-[83px] mb-[207px]
          border rounded-lg border-[#C4C4C4] text-[14px] leading-[17px] pt-2.5 px-3 bg-white resize-none"
        placeholder="crop tops, flaired pants,tie dye, skorts"
        init
        value={text}
        onChange={(event) => { handleTextInput(event); }}
      />
      <button
        type="button"
        disabled={!over}
        onClick={() => handleNext()}
      >
        <img src={over ? arrow : signupBtn} alt="sign up button not found" />
      </button>
      <SkipButton onClick={handleNavigation} />
    </div>

  );
};
export default StyleSuggestions;
