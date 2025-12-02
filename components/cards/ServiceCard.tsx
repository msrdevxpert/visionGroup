import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type ServiceCardProps = {
  id: number;
  imgSrc: StaticImageData | string;
  title: string;
  category: string;
  delay: string;
};
const ServiceCard = ({ id, category, imgSrc, title }: ServiceCardProps) => {
  return (
    <Link href={`/services/${id}`} className="legal-card">
      <Image src={imgSrc} width="68" height="68" className="mb-5" alt="" />
      <p className="mb-2 pt-2">{category}</p>
      <h4>{title}</h4>
    </Link>
  );
};

export default ServiceCard;
