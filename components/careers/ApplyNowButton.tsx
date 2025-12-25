"use client";

import { useRouter, usePathname } from "next/navigation";

interface Props {
  id: string;
}

const ApplyNowButton = ({ id }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    const segments = pathname.split("/").filter(Boolean);

    const base =
      segments.length === 0 ? "" : `/${segments[0]}`;

    router.push(`${base}/applyNow?id=${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="primary-btn mt-3"
    >
      Apply Now
    </button>
  );
};

export default ApplyNowButton;
