import blogPosts from "@/public/data/blogs";
import BlogGridCard from "../cards/BlogGridCard";

const Grid = () => {
  return (
    <section className="pt-120 pb-120 bg1">
      <div className="container">
        <div className="row g-4 gx-lg-0 mb-4 mb-lg-5">
          <div className="col-md-6 col-lg-8">
            <h2 className="fade_up_anim">Our Latest News</h2>
          </div>
          <div className="col-md-6 col-lg-4">
            <p className="fade_up_anim" data-delay=".3">
              Welcome to our blog, where we aim to provide valuable insights, expert advice, and informative articles on various legal matters related
            </p>
          </div>
        </div>
        <div className="row g-3 g-xxl-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-xl-4">
              <BlogGridCard {...post} />
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

export default Grid;
