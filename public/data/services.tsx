import audit from "@/public/images/audit.png";
import battery from "@/public/images/battery.png";
import consult from "@/public/images/consult.png";
import monitor from "@/public/images/monitor.png";
import service3 from "@/public/images/service-3.png";
import waterTurbine from "@/public/images/water-turbine.png";
import windmill from "@/public/images/windmill.png";
const services = [
  {
    id: 1,
    imgSrc: monitor, // Replace with actual imported image
    title: "Wind Consultation",
    category: "Consulting",
    delay: "0",
  },
  {
    id: 2,
    imgSrc: waterTurbine, // Replace with actual imported image
    title: "Water Turbine",
    category: "Installation",
    delay: ".1",
  },
  {
    id: 3,
    imgSrc: battery, // Replace with actual imported image
    title: "Wind Consultation",
    category: "Consulting",
    delay: ".2",
  },
  {
    id: 4,
    imgSrc: consult, // Replace with actual imported image
    title: "Wind Consultation",
    category: "Consulting",
    delay: ".3",
  },
  {
    id: 5,
    imgSrc: windmill, // Replace with actual imported image
    title: "Wind Installation",
    category: "Installation",
    delay: ".4",
  },
  {
    id: 6,
    imgSrc: battery, // Replace with actual imported image
    title: "Energy Storage",
    category: "Consulting",
    delay: ".5",
  },
  {
    id: 7,
    imgSrc: audit, // Replace with actual imported image
    title: "Efficiency Audits",
    category: "Consulting",
    delay: ".6",
  },
  {
    id: 8,
    imgSrc: service3, // Replace with actual imported image
    title: "Wind Maintenance",
    category: "Maintenance",
    delay: ".7",
  },
];
export default services;
