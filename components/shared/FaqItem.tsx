type Props = {
  id: number;
  question: string;
  answer: string;
  opened?: boolean;
  cls?: string;
  databsParent: string;
};
const FaqItem = ({ answer, databsParent, id, question, cls, opened }: Props) => {
  return (
    <div className={`accordion-item ${cls}`}>
      <div className="accordion-header">
        <button className={`accordion-button ${!opened ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
          {question}
        </button>
      </div>
      <div id={`collapse${id}`} className={`accordion-collapse collapse ${opened ? "show" : ""}`} data-bs-parent={databsParent}>
        <div className="accordion-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
