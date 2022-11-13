import { useContext } from "react";
import { AppContext } from "../context/app-context";
import Mark from "../models/Mark";

type StudentCardProps = { mark: Mark };

let StudentCard = (props: StudentCardProps) => {
  let context = useContext(AppContext);
  let onDeleteHandler = () => {
    context.deleteMark(props.mark.id);
  };
  return (
    <section className="card">
      <article className="card-top-content">
        <div className="card-top-content-leading">
          <span className="name-first-char">S</span>
          <div className="student-info">
            <span>{props.mark.studentName}</span>
            <span>{props.mark.id}</span>
          </div>
        </div>
        <a onClick={onDeleteHandler}>
          <i className="fa-solid fa-xmark delete-row"></i>
        </a>
      </article>
      <article className="card-marks">
        <section className="mark-info">
          <span>{props.mark.midTerm}</span>
          <span>30</span>
        </section>
        <section className="mark-info">
          <span>Final-Term</span>
          <span>{props.mark.finalTerm}</span>
        </section>
        <section className="mark-info">
          <span>Activities</span>
          <span>{props.mark.activities}</span>
        </section>
      </article>
    </section>
  );
};
export default StudentCard;
