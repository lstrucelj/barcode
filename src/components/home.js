import React from "react";
import ServicesListing from "./ServicesListing.js";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Contact from "./contact.js";
const config = require("../../data/SiteConfig.js");

export default ({ servicesEdges }) => (
  <main>
    <div role="main" className="main">
      <div
        className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover show-dots-xs show-dots-sm show-dots-md nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover bg-color-quaternary custom-slider-container mb-0"
        data-plugin-options="{'autoplay': true, 'autoplayTimeout': 7000}"
        data-dynamic-height="['991px','991px','991px','750px','750px']"
        style={{ height: "991px" }}
      >
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <div className="owl-item position-relative overflow-hidden">
              <div
                className="background-image-wrapper position-absolute top-0 left-0 right-0 bottom-0"
                data-appear-animation="kenBurnsToLeft"
                data-appear-animation-duration="30s"
                data-plugin-options="{'minWindowWidth': 0}"
                data-carousel-onchange-show
                style={{
                  backgroundImage: "url(/images/slide5.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="container position-relative z-index-3 pb-5 h-100">
                <div className="row justify-content-center justify-content-lg-start align-items-center pb-5 h-100">
                  <div className="col-sm-9 col-lg-7 text-center text-lg-start pb-5 mb-5">
                    <h2
                      className="text-color-primary font-weight-bold text-uppercase text-4 line-height-3 mb-2 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="500"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      <span className="line-pre-title bg-color-primary d-none d-lg-inline-block"></span>
                      Projektantska tvrtka iz područja građevinarstva
                    </h2>
                    <h1
                      className="text-color-secondary font-weight-extra-bold text-10 line-height-2 pe-lg-5 me-lg-5 mb-3 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="750"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      Od projektiranja do stručnog nadzora i certificiranja
                    </h1>
                    <p
                      className="text-4 text-color-dark font-weight-light mb-4 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="1000"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      Pružamo vam potpunu uslugu na jednom mjestu
                    </p>
                    <a
                      href="#usluge"
                      className="btn btn-primary btn-modern font-weight-bold text-2 btn-py-3 px-5 mt-2 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="1250"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      Saznaj više
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="owl-item position-relative overflow-hidden">
              <div
                className="background-image-wrapper position-absolute top-0 left-0 right-0 bottom-0"
                data-appear-animation="kenBurnsToRight"
                data-appear-animation-duration="30s"
                data-plugin-options="{'minWindowWidth': 0}"
                data-carousel-onchange-show
                style={{
                  backgroundImage: "url(/images/slide12.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="container position-relative z-index-3 pb-5 h-100">
                <div className="row align-items-center justify-content-center justify-content-lg-end pb-5 h-100">
                  <div className="col-sm-9 col-lg-7 text-center text-lg-start pb-5 mb-5">
                    <h3
                      className="text-color-primary font-weight-bold text-uppercase text-4 line-height-3 mb-2 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="500"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      <span className="line-pre-title bg-color-primary d-none d-lg-inline-block"></span>
                      Projektantska tvrtka iz područja građevinarstva
                    </h3>
                    <h2
                      className="text-color-secondary font-weight-extra-bold text-10 line-height-2 pe-lg-5 me-lg-5 mb-3 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="750"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      Vaše zadovoljstvo je naš glavni posao
                    </h2>
                    <p
                      className="text-4 text-color-dark font-weight-light mb-4 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="1000"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      Nudimo profesionalne usluge uz povoljnu cijenu
                    </p>
                    <a
                      href="#usluge"
                      className="btn btn-primary btn-modern font-weight-bold text-2 btn-py-3 px-5 mt-2 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="1250"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      Saznaj više
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-color-light p-relative z-index-2">
        <div
          className="cards custom-cards custom-cards-slider h-auto pt-5 pb-4 container appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="100"
        >
          <div className="row bg-color-light cards-container d-flex justify-content-center justify-content-xl-between w-100 mb-5 mx-0 box-shadow-1 p-relative top-0">
            <div className="col-sm-12 col-md-6 col-xl-4 bg-light p-0 shadow-none">
              <div className="card border-radius-0 border-0 shadow-none">
                <div className="card-body d-flex align-items-center justify-content-between flex-column z-index-1">
                  <img
                    src="/images/idea.svg"
                    alt="Vaša ideja"
                    className="appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="100"
                  />
                  <h4
                    className="card-title mb-1 font-weight-semibold text-color-secondary appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="200"
                  >
                    Vaša ideja
                  </h4>
                  <p
                    className="card-text text-center pt-2 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="300"
                  >
                    Vrijeme je da vaše ideje zažive uz stručan Barcode tim
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4 bg-light p-0 shadow-none">
              <div className="card border-radius-0 border-0 shadow-none">
                <div className="card-body d-flex align-items-center justify-content-between flex-column z-index-1">
                  <img
                    src="/images/quality.svg"
                    alt="Naša stručnost"
                    className="appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="500"
                  />
                  <h4
                    className="card-title mb-1 font-weight-semibold text-color-secondary appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="600"
                  >
                    Naša stručnost
                  </h4>
                  <p
                    className="card-text text-center pt-2 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="700"
                  >
                    Dopustite da vam sugeriramo raznovrsna moderna, dizajnerska,
                    unikatna rješenja
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4 bg-light p-0 shadow-none">
              <div className="card border-radius-0 border-0 shadow-none">
                <div className="card-body d-flex align-items-center justify-content-between flex-column z-index-1 border-end-0">
                  <img
                    src="/images/happy.svg"
                    alt="Zadovoljan klijent"
                    className="appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="900"
                  />
                  <h4
                    className="card-title mb-1 font-weight-semibold text-color-secondary appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1000"
                  >
                    Zadovoljan klijent
                  </h4>
                  <p
                    className="card-text text-center pt-2 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1100"
                  >
                    Za nas je svaki klijent jednako bitan, svaki projekt jednako
                    važan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="usluge"
        className="our-services d-flex p-relative z-index-1 bg-color-light lazyload"
        data-bg-src="/images/bg6.webp"
      >
        <div className="col-img-our-services p-absolute overflow-hidden w-50 h-100"></div>
        <div className="container">
          <div className="row justify-content-end align-items-center h-100">
            <div className="col-lg-5 position-relative bg-color-light z-index-1 col-our-services-text">
              <p
                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="100"
              >
                <span className="line-pre-title bg-color-primary"></span>
                naše usluge
              </p>
              <h2
                className="text-color-secondary font-weight-bold text-capitalize mb-4 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="200"
              >
                Što radimo?
              </h2>
              <div
                className="accordion accordion-sm appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="500"
                id="accordionServices"
              >
                <ServicesListing services={servicesEdges} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="o-nama"
        className="coaching-consulting d-flex p-relative bg-color-light pt-3 pb-3 pt-lg-5 pb-lg-4"
      >
        <div className="container">
          <div className="row justify-content-end py-5">
            <div className="col-lg-6">
              <p
                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="100"
              >
                <span className="line-pre-title bg-color-primary"></span>
                nova razina kvalitete
              </p>
              <h2
                className="text-color-secondary font-weight-bold text-capitalize mb-4 custom-letter-spacing-2 custom-text-1 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="200"
              >
                Uspješan tim
              </h2>
              <p
                className="font-weight-semibold mb-4 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="300"
              >
                Od same ideje, preko izrade i vođenja projekta, sve do stručnog
                nadzora građenja, uz Vas smo na svakom koraku.
              </p>
              <p
                className="mb-4 pb-2 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="400"
              >
                Brinemo o zaštiti na radu te raznim poslovima oko procjene i
                poslovanja s nekretninama i energetskom certificiranju.
                Suradnjom s nama štedite vrijeme i novac te najvažnije od svega
                - dobivate kvalitetnu uslugu.
              </p>
              <div
                className="d-flex align-items-center justify-content-start appear-animation"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="600"
              >
                <div className="circular-bar custom-circular-bar m-0">
                  <div
                    className="circular-bar-chart"
                    data-percent="89"
                    data-plugin-options="{'barColor': '#009099'}"
                  >
                    <strong className="text-5 text-color-tertiary">99%</strong>
                  </div>
                </div>
                <h4 className="font-weight-bold text-color-tertiary m-0 ms-3">
                  Uspješnih projekata <br />
                  od 2018.
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-coaching-consulting-imgs p-relative">
              <div
                className="card border-radius-0 box-shadow-1 border-0 p-3 appear-animation"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="300"
              >
                <img
                  src="/images/img16.webp"
                  className="img-fluid border-radius-0"
                  alt=""
                />
              </div>
              <div
                className="card border-radius-0 box-shadow-1 border-0 p-3 appear-animation"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="300"
              >
                <img
                  src="/images/img2.webp"
                  className="img-fluid border-radius-0"
                  alt=""
                />
              </div>
              <div
                className="card border-radius-0 box-shadow-1 border-0 p-3 appear-animation"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="300"
              >
                <img
                  src="/images/img15.webp"
                  className="img-fluid border-radius-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="real-word-stories bg-color-quaternary overflow-hidden p-relative pb-4">
        <div className="container py-xl-5">
          <div
            id="mobile-reasons"
            className="row justify-content-between align-items-center pt-5 py-xl-5 mt-3"
          >
            <div className="col-xl-6 mb-5 pb-5 mb-xl-0 pb-xl-0">
              <div
                className="appear-animation"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="100"
              >
                <div
                  className="owl-carousel owl-theme m-0"
                  data-plugin-options="{'items': 1, 'autoplay': false, 'animateOut': 'fadeOut', 'autoHeight': true}"
                >
                  <div className="custom-testimonial-container bg-color-light">
                    <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                      <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                        <img
                          src="/images/case1.svg"
                          alt="Prihvacamo nove ideje"
                        />
                      </div>
                      <blockquote className="px-0 pb-5">
                        <h4 className="text-color-secondary font-weight-bold text-start">
                          Prihvaćamo nove ideje
                        </h4>
                        <p className="mb-0 text-start text-3">
                          Otvoreni smo za nove ideje i iskustva, a kroz stručnu
                          podršku i savjetovanja našim korisnicima, unaprjeđivat
                          ćemo usluge koristeći znanje i iskustvo.
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down"></div>
                    </div>
                  </div>
                  <div className="custom-testimonial-container bg-color-light">
                    <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                      <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                        <img
                          src="/images/case2.svg"
                          alt="Prihvacamo nove ideje"
                        />
                      </div>
                      <blockquote className="px-0 pb-5">
                        <h4 className="text-color-secondary font-weight-bold text-start">
                          Pouzdani smo i odgovorni
                        </h4>
                        <p className="mb-0 text-start text-3">
                          Naši klijenti s potpunom sigurnošću mogu računati da
                          ćemo odgovorno i pouzdano izvesti sve radove nadzora i
                          savjetovanja na obostrano zadovoljstvo.
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down"></div>
                    </div>
                  </div>
                  <div className="custom-testimonial-container bg-color-light">
                    <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                      <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                        <img
                          src="/images/case3.svg"
                          alt="Prihvacamo nove ideje"
                        />
                      </div>
                      <blockquote className="px-0 pb-5">
                        <h4 className="text-color-secondary font-weight-bold text-start">
                          Poštujemo dogovorene rokove
                        </h4>
                        <p className="mb-0 text-start text-3">
                          Budite sigurni da ćemo cjelovito pristupiti svakom
                          projektu bez probijanja rokova, nepotpunih analiza i
                          sastanaka bez dnevnog reda. Jer mi smo tu zbog vas!
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down"></div>
                    </div>
                  </div>
                  <div className="custom-testimonial-container bg-color-light">
                    <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                      <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                        <img
                          src="/images/case4.svg"
                          alt="Prihvacamo nove ideje"
                        />
                      </div>
                      <blockquote className="px-0 pb-5">
                        <h4 className="text-color-secondary font-weight-bold text-start">
                          Prilagođavamo se u skladu s vašim potrebama
                        </h4>
                        <p className="mb-0 text-start text-3">
                          Lako se prilagođavamo tržišnim promjenama i
                          novonastalim situacijama. Obratite nam se s punim
                          povjerenjem jer posjedujemo golemo iskustvo i stručne
                          inženjere.
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down"></div>
                    </div>
                  </div>
                  <div className="custom-testimonial-container bg-color-light">
                    <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                      <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                        <img
                          src="/images/case5.svg"
                          alt="Prihvacamo nove ideje"
                        />
                      </div>
                      <blockquote className="px-0 pb-5">
                        <h4 className="text-color-secondary font-weight-bold text-start">
                          Pratimo namjensko trošenje sredstava
                        </h4>
                        <p className="mb-0 text-start text-3">
                          Kroz financijski nadzor nad građenjem pratimo
                          namjensko trošenje sredstava i kontroliramo
                          usklađenost projektne dokumentacije s izvedenim
                          radovima.
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down"></div>
                    </div>
                  </div>
                  <div className="custom-testimonial-container bg-color-light">
                    <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                      <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                        <img
                          src="/images/case6.svg"
                          alt="Prihvacamo nove ideje"
                        />
                      </div>
                      <blockquote className="px-0 pb-5">
                        <h4 className="text-color-secondary font-weight-bold text-start">
                          Dobar glas daleko se čuje
                        </h4>
                        <p className="mb-0 text-start text-3">
                          Naši klijenti su vrlo zadovoljni našim uslugama. Cilj
                          nam je stvoriti zajednicu sretnih i zadovoljnih
                          korisnika koji će nas preporučiti drugima.
                        </p>
                      </blockquote>
                      <div className="testimonial-arrow-down"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 mb-5 mb-xl-0">
              <p
                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="300"
              >
                <span className="line-pre-title bg-color-primary"></span>6
                razloga
              </p>
              <h2
                className="text-color-secondary font-weight-bold text-capitalize mb-4 custom-letter-spacing-2 custom-text-1 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="400"
              >
                zašto odabrati nas
              </h2>
              <p
                className="font-weight-semibold mb-4 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="500"
              >
                Nit vodilja naše tvrtke je ponuditi najbolje materijale po
                pristupačnim cijenama, te svakoj kupnji ponuditi dodanu
                vrijednost.
              </p>
              <p
                className="mb-4 pb-2 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="600"
              >
                Dosadašnji rezultati naš su pokazatelj da svakome projektu
                pristupamo individualno i odgovorno stoga nam se obratite s
                povjerenjem za sve naše usluge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="are-you-looking-for bg-color-secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5">
              <p
                className="text-uppercase font-weight-semibold mb-1 text-color-light appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="100"
              >
                <span
                  className="line-pre-title bg-color-primary appear-animation"
                  data-appear-animation="fadeInRightShorter"
                  data-appear-animation-delay="200"
                ></span>
                Imate li pitanja?
              </p>
              <h2
                className="text-color-light font-weight-bold mb-1 letter-spacing-08 font-size-32 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="200"
              >
                Tu smo zbog Vas!
              </h2>
              <p
                className="font-weight-semibold text-color-light mb-0 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="300"
              >
                Rado ćemo Vam pomoći, saslušati Vaše prijedloge i učiniti sve da
                budete zadovoljni.
              </p>
            </div>
            <div className="col-xl-6 d-flex align-items-start align-items-sm-center justify-content-start justify-content-xl-end mt-4 mt-xl-0 flex-column flex-sm-row">
              <div>
                <span
                  className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 appear-animation"
                  data-appear-animation="fadeInLeftShorter"
                  data-appear-animation-delay="500"
                >
                  <span>
                    <img
                      width="18"
                      height="25"
                      src="/images/phone.svg"
                      alt="Phone"
                    />
                  </span>
                  <a
                    className="text-color-light text-decoration-none"
                    href={`tel:${config.userMobileNumber}`}
                  >
                    {config.userMobileNumber}
                  </a>
                </span>
                <span
                  className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 appear-animation"
                  data-appear-animation="fadeInLeftShorter"
                  data-appear-animation-delay="500"
                >
                  <span>
                    <img
                      width="25"
                      height="18"
                      src="/images/mail.svg"
                      alt="Mail"
                    />
                  </span>
                  <a
                    className="text-color-light text-decoration-none"
                    href={`mailto:${config.userMail}`}
                    style={{ textTransform: "lowercase" }}
                  >
                    {config.userMail}
                  </a>
                </span>
              </div>

              <a
                href="#kontakt"
                className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold appear-animation"
                data-appear-animation="fadeInLeftShorter"
                data-appear-animation-delay="600"
              >
                Kontaktirajte nas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="our-blog">
        <Contact />
      </section>
    </div>
  </main>
);
