import notFound from "@/public/images/404.png";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center flex-column text-center">
            <Image src={notFound} className="img-fluid" alt="" />
            <h2 className="fade_up_anim">Oops! Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/" className="outline-btn">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
