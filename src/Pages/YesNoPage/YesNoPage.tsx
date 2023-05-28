import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { IYesNo } from "../../types/types";
import "./yesnopage.css";

interface YesNoPageProps {}

const YesNoPage: React.FC<YesNoPageProps> = ({}) => {
  const [answer, setAnswer] = useState<IYesNo>();
  const [modalActive, setModalActive] = useState(false);

  async function getAnswer(e: React.FormEvent) {
    e.preventDefault();
    const response = await axios.get<IYesNo>("https://yesno.wtf/api");
    setAnswer(response.data);
    console.log('1',answer);
    setTimeout(() => {
      setModalActive(!modalActive);
    }, 600);
  }
  console.log('2',answer);
  return (
    <div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className="answer__container">
          <strong>{answer?.answer}</strong>
          <img src={answer?.image} alt="" />
        </div>
      </ModalWindow>
      <div className="form__container">
        <form>
          <h2>Введите свой вопрос:</h2>
          <input type="text" id="question" name="question" required />
          <div className="btn__container">
            <button onClick={getAnswer}>Получить ответ</button>
            <Link to={"/"}>
            <button>На главную</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default YesNoPage;
