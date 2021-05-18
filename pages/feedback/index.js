import { Fragment, useState } from "react";
import { buildFeedbackpath, extractFeedback } from "../api/feedback/index";

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    console.log(id);
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  };

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feebackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackpath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feebackItems: data,
    },
  };
}

export default FeedbackPage;
