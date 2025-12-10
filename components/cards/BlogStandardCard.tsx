import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Blog = {
  id: number;
  imageSrc: string | StaticImageData; // Replace with imported image
  alt: string;
  author: string;
  date: string;
  time: string;
  title: string;
  description: string;
};

const BlogStandardCard = ({ id, alt, author, date, description, imageSrc, time, title }: Blog) => {
  return (
    <div className="blog-standard">
      <div className="reveal reveal--right reveal--overlay overflow-hidden">
        <Image src={imageSrc} className="w-100" alt={alt} />
      </div>
      <div className="blog-content">
        <ul className="list-unstyled p-0 mt-4 d-flex align-items-center gap-3 flex-wrap">
          <li className="d-flex align-items-center gap-2">
            <i className="ti ti-user-circle fs-5"></i> {author}
          </li>
          <li className="text-primary">•</li>
          <li className="d-flex align-items-center gap-2">
            <i className="ti ti-calendar-event fs-5"></i> {date}
          </li>
          <li className="text-primary">•</li>
          <li className="d-flex align-items-center gap-2">
            <i className="ti ti-clock fs-5"></i> {time}
          </li>
        </ul>
        <h3 className="mt-2 mb-3">{title}</h3>
        <p>{description}</p>
        <Link href={`/blogs/${id}`} className="outline-btn d-inline-flex align-items-center gap-2">
          Read More <i className="ti ti-arrow-up-right fs-5"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogStandardCard;
