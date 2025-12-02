import blogGrid1 from "@/public/images/blog-grid-1.webp";
import blogGrid2 from "@/public/images/blog-grid-2.webp";
import blogGrid3 from "@/public/images/blog-grid-3.webp";
import blogGrid4 from "@/public/images/blog-grid-4.webp";
import blogGrid5 from "@/public/images/blog-grid-5.webp";
import blogGrid6 from "@/public/images/blog-grid-6.webp";
import blogGrid7 from "@/public/images/blog-grid-7.webp";
import blogGrid8 from "@/public/images/blog-grid-8.webp";
import BlogListCard from "../cards/BlogListCard";
const blogPosts = [
  {
    id: 1,
    imgSrc: blogGrid1, // Replace with actual image import if necessary
    date: { day: "24", month: "Dec" },
    title: "Weather Affects Hydropower",
    description: "In this blog post, we share valuable financial advice to help you navigate...",
  },
  {
    id: 2,
    imgSrc: blogGrid2,
    date: { day: "24", month: "Dec" },
    title: "Investing in Hydropower",
    description: "Grandparents play a vital role in a child's life. This blog post sheds light on grandparents...",
  },
  {
    id: 3,
    imgSrc: blogGrid3,
    date: { day: "24", month: "Dec" },
    title: "Top Countries Leading Power",
    description: "Adoption is a life-changing journey that creates forever families...",
  },
  {
    id: 4,
    imgSrc: blogGrid4,
    date: { day: "24", month: "Dec" },
    title: "A Beginner’s Guide",
    description: "Child custody decisions around the best interests of the child...",
  },
  {
    id: 5,
    imgSrc: blogGrid5,
    date: { day: "24", month: "Dec" },
    title: "How to Overcome Them",
    description: "Estate planning ensures your legacy is protected and passed down...",
  },
  {
    id: 6,
    imgSrc: blogGrid6,
    date: { day: "24", month: "Dec" },
    title: "Hydropower Development",
    description: "Mediation offers a constructive approach to resolving family...",
  },
  {
    id: 7,
    imgSrc: blogGrid7,
    date: { day: "24", month: "Dec" },
    title: "How Hydropower Contributes",
    description: "Domestic violence affects countless lives. In this blog post, we discuss...",
  },
  {
    id: 8,
    imgSrc: blogGrid8,
    date: { day: "24", month: "Dec" },
    title: "10 Benefits of Hydropower",
    description: "Surrogacy offers hope to aspiring parents. Explore the beautiful gift...",
  },
];

const List = () => {
  return (
    <section className="pt-120 pb-120 bg1">
      <div className="container">
        <div className="row g-4 mb-4 mb-lg-5">
          <div className="col-md-6 col-lg-8">
            <h2 className="fade_up_anim">Our Latest News</h2>
          </div>
          <div className="col-md-6 col-lg-4">
            <p>Welcome to our blog, where we aim to provide valuable insights, expert advice, and informative articles on various legal matters related</p>
          </div>
        </div>
        <div className="row g-3 g-md-4">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="col-xl-6">
              <BlogListCard key={blog.id} {...blog} />
            </div>
          ))}
        </div>
        <ul className="list-unstyled mb-0 mt-4 pt-lg-3 d-flex justify-content-center gap-2 gap-sm-3 pagination">
          <li>
            <a href="#">
              <i className="ti ti-chevron-left"></i>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">
              <i className="ti ti-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default List;
