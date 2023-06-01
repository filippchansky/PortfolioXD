import React, { useState } from "react";
import { IGithubRep } from "../../types/types";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./repositoryitem.css";

interface RepositoryItemProps {
  repository: IGithubRep;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {
  const [modalRep, setModalRep] = useState(false);

  return (
    <div
      className="repository__container"
      onClick={() => setModalRep(!modalRep)}
    >
      <div className="repository__header">
        <h1 className="repository__name repository__header-info">
          <span>Название: </span>
          {repository.name}
        </h1>
        <span className="repository__stars repository__header-info">
          <span>Кол-во звезд: </span>
          {repository.stargazers_count}
        </span>
      </div>
      <ModalWindow active={modalRep} setActive={setModalRep}>
        <div className="repository__modal">
          <div className="repository__modal-img">
            <a href={repository.owner.html_url} target="_blank">
              <img src={repository.owner.avatar_url} alt="" />
            </a>
          </div>
          <div className="repository__modal-info">
            <header className="repository__modal-header">
              <div className="repository__modal-header-name">
                <span>
                  Автор:{" "}
                  <a href={repository.owner.html_url} target="_blank">
                    {repository.owner.login}
                  </a>
                </span>
              </div>
              <p className="repository__modal-header-star">
                <span>&#9733;</span>
                {repository.stargazers_count}
              </p>
            </header>
            <main className="repository__modal-body">
              <p className="repository__modal-body-language">
                <span>Используемые языки:</span>
                {repository.language}
              </p>
              <p className="repository__modal-body-description">
                <span>Описание:</span>
                {repository.description}
              </p>
            </main>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};
export default RepositoryItem;
