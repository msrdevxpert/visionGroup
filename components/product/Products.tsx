"use client";
import { products } from "@/public/data/products";
import { useState } from "react";
import ProductCard from "../cards/ProductCard";
import RSelect from "../shared/Select";

const ProductsPage = () => {
  const [minValue, setMinValue] = useState(200);
  const [maxValue, setMaxValue] = useState(400);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMaxValue(value);
  };
  const options = [
    {
      value: "Default",
      label: "Default",
    },
    {
      value: "Name (A-Z)",
      label: "Name (A-Z)",
    },
    {
      value: "Name (Z-A)",
      label: "Name (Z-A)",
    },
    {
      value: "Newest",
      label: "Newest",
    },
  ];
  return (
    <section className="products-page pt-120 pb-120">
      <div className="container-big">
        <div className="row g-xl-4 position-relative">
          <div className="col-xl-3 product-filter">
            <div className="white-box position-relative">
              <h4 className="bb-dashed-24">Filter</h4>
              <button className="filter-close d-xl-none">
                <i className="ti ti-x"></i>
              </button>
              <form className="n0 mb-4">
                <input type="text" placeholder="Search" />
                <i className="ti ti-search"></i>
              </form>
              <h5 className="mb-3 mb-xl-4">Types of Categories</h5>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="solar" />
                    <label className="form-check-label" htmlFor="solar">
                      Solar System
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="wind" />
                    <label className="form-check-label" htmlFor="wind">
                      Wind System
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="hydro" />
                    <label className="form-check-label" htmlFor="hydro">
                      Hydro System
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="mechanical" />
                    <label className="form-check-label" htmlFor="mechanical">
                      Mechanical Tools
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="cable" />
                    <label className="form-check-label" htmlFor="cable">
                      Cables
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="tools" />
                    <label className="form-check-label" htmlFor="tools">
                      Electric Tools
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="connection" />
                    <label className="form-check-label" htmlFor="connection">
                      Cable Connection
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="package" />
                    <label className="form-check-label" htmlFor="package">
                      Packages
                    </label>
                  </div>
                  <p>1563</p>
                </div>
                <a href="#" className="text-black fw-medium mt-1">
                  See All
                </a>
              </div>
              <h5 className="mb-3 mb-xl-4 mt-4 pt-lg-2">Pricing Scale</h5>
              <div className="w-100 h-100 mb-3 mb-xl-4">
                <div
                  className="range-slider"
                  style={
                    {
                      "--min": 0,
                      "--max": 1000,
                      "--value-a": minValue,
                      "--value-b": maxValue,
                      "--text-value-a": `"${minValue}"`,
                      "--text-value-b": `"${maxValue}"`,
                    } as React.CSSProperties
                  } // Use CSSProperties for inline custom properties
                >
                  <input id="min" type="range" min="0" max="1000" value={minValue} onChange={handleMinChange} />
                  <input id="max" type="range" min="0" max="1000" value={maxValue} onChange={handleMaxChange} />
                  <div className="range-slider__progress"></div>
                </div>
                <div className="mt-2 d-flex justify-content-center gap-2">
                  <p className="minprice">${minValue}</p>
                  <p>-</p>
                  <p className="maxprice">${maxValue}</p>
                </div>
              </div>
              <h5 className="mb-3 mb-xl-4">Star Category</h5>
              <div className="d-flex flex-column gap-3 mb-3 mb-xl-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="5" />
                    <label className="form-check-label" htmlFor="5">
                      <i className="ti ti-star-filled text-yellow"></i> 5 Star
                    </label>
                  </div>
                  <p>163</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="4" />
                    <label className="form-check-label" htmlFor="4">
                      <i className="ti ti-star-filled text-yellow"></i> 4 Star
                    </label>
                  </div>
                  <p>163</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="3" />
                    <label className="form-check-label" htmlFor="3">
                      <i className="ti ti-star-filled text-yellow"></i> 3 Star
                    </label>
                  </div>
                  <p>163</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="2" />
                    <label className="form-check-label" htmlFor="2">
                      <i className="ti ti-star-filled text-yellow"></i> 2 Star
                    </label>
                  </div>
                  <p>163</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input mt-0" type="checkbox" id="1" />
                    <label className="form-check-label" htmlFor="1">
                      <i className="ti ti-star-filled text-yellow"></i> 1 Star
                    </label>
                  </div>
                  <p>163</p>
                </div>
              </div>
              <h5 className="mb-3 mb-xl-4">Popular Tags</h5>
              <div className="d-flex flex-wrap gap-2 mb-3 mb-xl-4 pb-xxl-1">
                <a href="#" className="tag round">
                  Mechanical Tools
                </a>
                <a href="#" className="tag round">
                  Inverter
                </a>
                <a href="#" className="tag round">
                  Wind
                </a>
                <a href="#" className="tag round">
                  Power
                </a>
                <a href="#" className="tag round">
                  Energy
                </a>
                <a href="#" className="tag round">
                  Solar
                </a>
                <a href="#" className="tag round">
                  Hydro
                </a>
              </div>
              <a href="#" className="text-sm fw-semibold d-block mb-4 pb-xxl-2 text-bg2">
                More Tags
              </a>
              <button className="reset">
                <i className="ti ti-reload"></i>Reset Filters
              </button>
            </div>
          </div>
          <div className="col-xl-9 product-list">
            <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-4 pb-xxl-3">
              <p>Showing 35 of 150 Results</p>
              <div className="d-flex align-items-center gap-2 flex-shrink-0">
                <p className="mb-0 flex-shrink-0">Sort by:</p>
                <RSelect options={options} cls="n0" />
                <button className="filter-btn d-xl-none">
                  <i className="ti ti-filter"></i>
                </button>
              </div>
            </div>
            <div className="row g-3 g-xl-4">
              {products.map((product) => (
                <div className="col-md-6 col-xl-4" key={product.id}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
            <ul className="list-unstyled mt-4 pt-lg-3 d-flex justify-content-center gap-3 pagination">
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
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
