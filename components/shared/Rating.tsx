import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="rating d-flex gap-2 fs-4 mb-3 mb-xl-4">
      {[1, 2, 3, 4, 5].map((value) => (
        <i key={value} className={`ti ti-star${value <= rating ? "-filled" : ""}`} data-value={value} onClick={() => handleRating(value)} style={{ cursor: "pointer" }}></i>
      ))}
    </div>
  );
}

export default Rating;
