"use client";
import cash from "@/public/images/cash.png";
import delivery from "@/public/images/delivery.png";
import express from "@/public/images/express.png";
import free from "@/public/images/free.png";
import mastercard from "@/public/images/mastercard.png";
import payoneer from "@/public/images/payoneer.png";
import paypal from "@/public/images/paypal.png";
import visa from "@/public/images/visa.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RSelect from "../shared/Select";
const options = [
  {
    label: "**** **** ****3652-gole layla",
    value: "1",
  },
  {
    label: "**** **** ****3653-John Doe",
    value: "2",
  },
  {
    label: "**** **** ****3654-Ben Smith",
    value: "3",
  },
  {
    label: "**** **** ****3655-Jane Doe",
    value: "4",
  },
];
const deliveryOptions = [
  {
    id: 1,
    type: "Free",
    deliveryTime: "5-7 Days delivery",
    price: 0,
    image: free, // Replace `free` with the actual image import or path
  },
  {
    id: 2,
    type: "Standard",
    deliveryTime: "3-5 Days delivery",
    price: 10,
    image: delivery, // Replace `delivery` with the actual image import or path
  },
  {
    id: 3,
    type: "Express",
    deliveryTime: "2-3 Days delivery",
    price: 20,
    image: express, // Replace `express` with the actual image import or path
  },
];

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState(deliveryOptions[0]);
  return (
    <section className="pt-80 pb-80 bg1 z-3 position-relative">
      <div className="container">
        <div className="row g-4 position-relative">
          <div className="col-lg-8 z-3">
            <div className="product-details-left mb-3 mb-xl-4">
              <div className="bb-dashed-24">
                <h4 className="mb-0">Delivery</h4>
              </div>
              <div className="row g-3 g-xl-4">
                {deliveryOptions.map((option, index) => (
                  <div onClick={() => setSelectedOption(option)} className="col-sm-6" key={index}>
                    <div className={`delivery-card ${selectedOption.id === option.id ? "active" : ""}`}>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={option.image} alt={option.type} />
                        <div>
                          <h5 className="mb-2">{option.type}</h5>
                          <p>{option.deliveryTime}</p>
                        </div>
                      </div>
                      <span className="xl-text fw-medium">${option.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-details-left">
              <div className="bb-dashed-24">
                <h4 className="mb-0">Payment</h4>
              </div>
              <div className="d-flex flex-column gap-3 gap-xl-4 bb-dashed-24">
                <div className="delivery-card">
                  <div>
                    <h5 className="mb-3">Pay with Paypal</h5>
                    <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                  </div>
                  <Image src={paypal} alt="" />
                </div>
                <div className="delivery-card">
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap mb-3">
                      <div>
                        <h5 className="mb-3">Credit / Debit Card</h5>
                        <p>We support Mastercard, Visa, Discover and Stripe.</p>
                      </div>
                      <div className="d-flex gap-3">
                        <Image src={payoneer} alt="" />
                        <Image src={mastercard} alt="" />
                        <Image src={visa} alt="" />
                      </div>
                    </div>
                    <RSelect options={options} />
                    <button className="d-flex justify-content-end w-100 gap-2 align-items-center flex-grow-1 mt-3">
                      <i className="ti ti-plus"></i>
                      Add New Card
                    </button>
                  </div>
                </div>
                <div className="delivery-card">
                  <div>
                    <h5 className="mb-3">Cash</h5>
                    <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                  </div>
                  <Image src={cash} alt="" />
                </div>
              </div>
              <Link href="/products" className="d-flex align-items-center gap-2">
                <i className="ti ti-arrow-left text-black"></i>
                <h6 className="fw-semibold mb-0">Back</h6>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 details-right z-3">
            <div className="white-box">
              <div className="d-flex justify-content-between bb-dashed-24">
                <h5 className="mb-0">Address</h5>
                <button className="d-flex gap-2 align-items-center fs-6 fw-medium">
                  <i className="ti ti-pencil"></i> Edit
                </button>
              </div>
              <div className="d-flex align-items-center gap-2">
                <p className="fs-5 mb-3">
                  <span className="fw-medium">Jayvion Simon</span> <span className="text-n100 fw-normal">(Home)</span>
                </p>
              </div>
              <p className="mb-2">4517 Washington Ave. Manchester, Kentucky</p>
              <p>(208) 555-0112, (319) 555-0115</p>
            </div>
            <div className="white-box">
              <p className="text-lg fw-medium mb-3">Price</p>
              <div className="mb-4 pb-xl-2 d-flex gap-2 align-items-center">
                <i className="ti ti-tag fs-3"></i>
                <p>From</p>
                <h3 className="mb-0">$39.99</h3>
                <i className="ti ti-info-circle align-self-start"></i>
              </div>
              <div className="price-list mb-2">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <p className="text-n500">Base Price</p>
                  <p className="fw-medium">$39.99</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-n500">State Tax</p>
                  <p className="fw-medium">$5</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-n500">Shipping</p>
                  <p className="fw-medium">Free</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-n500">Discount</p>
                  <span className="fw-medium text-secondary3">$5.99</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-n500">Total</p>
                  <p className="fw-medium">$39.00</p>
                </div>
              </div>
              <button className="buy-now mt-4">Complete Order</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
