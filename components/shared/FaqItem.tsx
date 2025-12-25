"use client";
import { useEffect, useState } from "react";

type Props = {
  id?: string;           // Optional: ID to fetch specific FAQ
  type?: string;         // Optional: category/type
  question?: string;     // Optional: question
  answer?: string;       // Optional: answer passed as prop
  opened?: boolean;
  cls?: string;
  databsParent: string;
};

const FaqItem = ({ id, type, question, answer, databsParent, cls, opened }: Props) => {
  const [faqAnswer, setFaqAnswer] = useState<string>(answer || "Loading...");
  const [faqQuestion, setFaqQuestion] = useState<string>(question || "");
  const [loading, setLoading] = useState(!answer); // if answer prop exists, no need to load

  useEffect(() => {
    if (answer) return; // already have answer

    const fetchFaq = async () => {
      try {
        let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/public`;
        if (type && type.toLowerCase() !== "main") {
          url += `?category=${type}`;
        } else if (id) {
          url += `?id=${id}`;
        }

        const res = await fetch(url);
        const json = await res.json();

        if (json.data && json.data.length > 0) {
          setFaqAnswer(json.data[0].answer);
          if (!question) setFaqQuestion(json.data[0].question);
        } else {
          setFaqAnswer("Answer not available.");
        }
      } catch (err) {
        console.error("FAQ fetch error:", err);
        setFaqAnswer("Error loading answer.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, [id, type, question, answer]);

  return (
    <div className={`accordion-item ${cls || ""}`}>
      <div className="accordion-header">
        <button
          className={`accordion-button ${!opened ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id || type}`}
          aria-expanded={opened ? "true" : "false"}
          aria-controls={`collapse-${id || type}`}
        >
          {faqQuestion}
        </button>
      </div>

      <div
        id={`collapse-${id || type}`}
        className={`accordion-collapse collapse ${opened ? "show" : ""}`}
        data-bs-parent={databsParent}
      >
        <div className="accordion-body">
          <p>{loading ? "Loading..." : faqAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
