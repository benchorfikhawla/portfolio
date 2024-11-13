"use client";
import ImageGallery from "@/components/popup/ImageGallery";
import ImageView from "@/components/popup/ImageView";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const TretoLayout = ({ children, header, footer, noFooter }) => {
  useEffect(() => {
    if (
      document.querySelector("body").classList.contains("mil-custom-scroll")
    ) {
      document.querySelector("body").classList.remove("mil-custom-scroll");
    }
  }, []);
  return (
    <Fragment>
      <ImageView />
      <ImageGallery />
      <div className="mil-frame">
        <Header header={header} />
        {!noFooter && <Footer footer={footer} />}
      </div>
      {children}
    </Fragment>
  );
};
export default TretoLayout;
