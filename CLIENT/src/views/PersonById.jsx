import { Navigate, NavLink } from "react-router-dom";
import {
  faArrowLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/styles/scss/PersonById.scss";
import useFetchPersonById from "../hooks/UseFetchPersonById.jsx";
import { useValidation } from "../hooks/UseValidation.jsx";
import Toast from "../components/Toast.jsx";
import { useUser } from "../hooks/UseUser.jsx";

const COMMENT_REGEX = /^[a-zA-Z0-9À-ÿ.,!?()'\n\r\s-]{1,500}$/;

function PersonById() {
  const { person, isLoading, error } = useFetchPersonById();

  const { user } = useUser();
  const [comment, setComment, validComment] = useValidation(COMMENT_REGEX);
  const [succes, setSucces] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [commentError, setCommentError] = useState(null);
  const [alertError, setAlertError] = useState(null);
  const navigate = useNavigate();

  const handleCloseToast = () => {
    setShowToast(false);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch(
      `http://localhost:9000/api/comment/${person[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );
    const responseParsed = await response.json();
    form.reset();
    if (response.status === 403 || response.status === 500) {
      setCommentError(responseParsed.message);
      setSucces("Une erreur s'est produite");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return;
    }

    setSucces("Votre commentaire à bien été ajouté");
    setCommentError(null);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      navigate("/classes");
    }, 3000);
  }

  async function alertSubmitHandler(comment_id) {
    const response = await fetch(
      `http://localhost:9000/api/alert/${comment_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseParsed = await response.json();
    if (response.status === 403 || response.status === 500) {
      setAlertError(responseParsed.message);
      setSucces("Une erreur s'est produite");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return;
    }

    setSucces("Ce commentaire à bien été signalé");
    setAlertError(null);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  if (isLoading) return <p>Loading...</p>;

  const personWithSpecs = person.reduce(
    (acc, item) => {
      if (
        !acc.specializations.find(
          (spec) => spec.specialization_name === item.specialization_name
        )
      ) {
        acc.specializations.push({
          specialization_name: item.specialization_name,
          specialization_description: item.specialization_description,
          specialization_image: item.specialization_image,
          specialization_alt: item.specialization_alt,
          important_skills: item.important_skills,
          skill1: item.skill1,
          skill2: item.skill2,
        });
      }
      if (
        !acc.comments.find(
          (comment) =>
            comment.comment_content === item.comment_content &&
            comment.comment_date === item.comment_date
        )
      ) {
        acc.comments.push({
          comment_id: item.comment_id,
          comment_status: item.comment_status,
          comment_content: item.comment_content,
          comment_date: item.comment_date,
          comment_user_id: item.comment_user_id,
          user_nickname: item.user_nickname,
          user_status: item.user_status,
        });
      }

      return acc;
    },
    {
      id: person[0].id,
      person_name: person[0].person_name,
      person_image: person[0].person_image,
      person_alt: person[0].person_alt,
      person_description: person[0].person_description,
      specializations: [],
      comments: [],
    }
  );

  return (
    <main id="personbyid">
      <NavLink to={"/classes"}>
        <p className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} className="fa-arrow" />
          Retour
        </p>
      </NavLink>
      <section className="personbyid-card">
        <h1>{personWithSpecs.person_name}</h1>
        <img
          src={`http://localhost:9000/images/${personWithSpecs.person_image}`}
          alt={personWithSpecs.person_alt}
          className="classe-img"
        />
        <p>{personWithSpecs.person_description}</p>

        {personWithSpecs.specializations.map((spec, index) => (
          <article className="specs" key={index}>
            <h2>{spec.specialization_name}</h2>
            <img
              src={`http://localhost:9000/images/${spec.specialization_image}`}
              alt={spec.specialization_alt}
              className="spec-img"
            />
            <p>{spec.specialization_description}</p>
            <h3>{spec.important_skills}</h3>
            <p>
              {spec.skill1} <br />
              {spec.skill2}
            </p>
          </article>
        ))}
      </section>
      <hr />
      <section className="comment-section">
        <h4 className="comment-title">Commentaires</h4>

        {personWithSpecs.comments
          .filter(
            (comment) =>
              (comment.comment_status === 0) & (comment.user_status === 0)
          )
          .map((comment, index) => (
            <article key={index}>
              {user.isLogged && (
                <button
                  className="alert"
                  onClick={() => alertSubmitHandler(comment.comment_id)}
                >
                  <FontAwesomeIcon icon={faTriangleExclamation} size={"xl"} />
                </button>
              )}
              <h5>{comment.user_nickname}</h5>
              <p className="comment-content">{comment.comment_content}</p>
            </article>
          ))}

        {user.isLogged && (
          <form onSubmit={submitHandler}>
            <textarea
              type="text"
              id="comment"
              name="comment"
              aria-label="Commentaire"
              placeholder="Ajouter un commentaire"
              autoComplete="off"
              onChange={(e) => setComment(e.target.value)}
              required
              className="comment-add"
            />
            <button
              type="submit"
              disabled={!validComment}
              className={!validComment ? "button-disabled" : "button-enabled"}
            >
              Ajoutez votre commentaire
            </button>
          </form>
        )}
      </section>
      {showToast && (
        <Toast
          message={commentError ? commentError : succes}
          onCloseOverlay={handleCloseToast}
        />
      )}
      {showToast && (
        <Toast
          message={alertError ? alertError : succes}
          onCloseOverlay={handleCloseToast}
        />
      )}
    </main>
  );
}

export default PersonById;
