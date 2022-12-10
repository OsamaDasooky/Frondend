/* eslint-disable no-undef */
import $ from "jquery";

import { useEffect } from "react";
import { Contact } from "./Components/Contact/Contact";
import { NewsDetailes } from "./Components/NewsDetailes/NewsDetailes";
import { Home } from "./pages/Home";
import { NewsDetailed } from "./pages/NewsDetailes";
import { Result } from "./pages/Result";
import { TeamAbout } from "./pages/TeamAbout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/generalComponents/Header";
import Footer from "./Components/generalComponents/Footer";

function App() {
  useEffect(() => {
    (function ($) {
      /*------------------
          Preloader
      --------------------*/
      $(window).on("load", function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
      });

      /*------------------
          Background Set
      --------------------*/
      $(".set-bg").each(function () {
        var bg = $(this).data("setbg");
        $(this).css("background-image", "url(" + bg + ")");
      });

      $(".canvas-open").on("click", function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
      });

      $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
      });

      // Search model
      $(".search-switch").on("click", function () {
        $(".search-model").fadeIn(400);
      });

      $(".search-close-switch").on("click", function () {
        $(".search-model").fadeOut(400, function () {
          $("#search-input").val("");
        });
      });

      /*------------------
      Navigation
    --------------------*/
      $(".mobile-menu").slicknav({
        prependTo: "#mobile-menu-wrap",
        allowParentLinks: true,
      });

      /*------------------
          News Slider
      --------------------*/
      $(".news-slider").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false,
      });

      /*------------------------
      Video Slider
      ----------------------- */
      $(".video-slider").owlCarousel({
        items: 4,
        dots: false,
        autoplay: false,
        margin: 0,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
      });

      /*------------------
          Magnific Popup
      --------------------*/
      $(".video-popup").magnificPopup({
        type: "iframe",
      });
    })(jQuery);
  });
  return (
    <>
      {/* <TeamAbout />
      <NewsDetailed />
      <Result />
      <Contact /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewsDetailes" element={<NewsDetailes />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* {"admin dashboard profile login register about " } */}
    </>
  );
}

export default App;
