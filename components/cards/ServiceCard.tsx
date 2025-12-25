"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ServiceCardProps = {
  id: string;
  serviceType: string;
  name: string;
  description: string;
  imgSrc?: string;
};

const ServiceCard = ({
  id,
  serviceType,
  name,
  description,
  imgSrc,
}: ServiceCardProps) => {
  // Example: /solar/services
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${id}`} className="legal-card">
      <Image
        src={imgSrc || "/images/service-placeholder.png"}
        width={68}
        height={68}
        className="mb-5"
        alt={name}
      />

      <p className="mb-2 pt-2">{serviceType}</p>

      <h4>{name}</h4>

      <p style={{ fontSize: "14px" }}>
        {description?.slice(0, 60)}...
      </p>
    </Link>
  );
};

export default ServiceCard;
