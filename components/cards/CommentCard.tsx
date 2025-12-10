"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

interface ReviewCardProps {
  name: string;
  role: string;
  time: string;
  date: string;
  rating: number;
  content: string;
  likes: number;
  clientImage: string | StaticImageData;
  replyImage: string | StaticImageData;
}

const CommentCard = ({ name, role, time, date, rating, content, likes, clientImage, replyImage }: ReviewCardProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => (i < Math.floor(rating) ? "ti-star-filled" : "ti-star-half-filled"));
  const [reply, setReply] = useState(false);
  return (
    <div className="review-card">
      <div className="bb-dashed-24 d-flex justify-content-between align-items-center gap-3 flex-wrap">
        <div className="d-flex gap-3 align-items-center">
          <Image src={clientImage} width="48" height="48" className="rounded-circle" alt={`${name}'s profile`} />
          <div>
            <h5 className="mb-1">{name}</h5>
            <p>{role}</p>
          </div>
        </div>
        <div className="text-end">
          <p className="mb-1">{time}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="d-flex gap-2 fs-5 text-yellow mb-2">
        {stars.map((starClass, index) => (
          <i key={index} className={`ti ${starClass}`}></i>
        ))}
      </div>
      <p className="bb-dashed-24">{content}</p>
      <div className="d-flex gap-4 gap-xl-5 buttons">
        <button className="d-flex gap-2 align-items-center">
          <i className="xl-text ti ti-thumb-up"></i> {likes}
        </button>
        <button onClick={() => setReply(!reply)} className="d-flex gap-2 align-items-center reply-button">
          <i className="xl-text ti ti-messages"></i> Reply
        </button>
      </div>
      <AnimateHeight height={reply ? "auto" : 0} duration={300}>
        <div className="reply-container">
          <div className="d-flex gap-3 mt-3 mt-xl-4">
            <Image src={replyImage} width="48" height="48" className="rounded-circle" alt={`${name}'s reply`} />
            <input type="text" className="form-control" placeholder="Write a reply" />
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default CommentCard;
