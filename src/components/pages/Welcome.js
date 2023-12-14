import React from "react";
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div>
      <div class="undefined mx-auto max-w-7xl sm:px-0">
        <div class="items-center pt-16 lg:pt-[56px] lg:grid lg:grid-cols-12 gap-y-12 lg:gap-y-4 xl:gap-y-8 section-bg lg:rounded-3xl">
          <div class="relative flex flex-col pb-16 pl-5 pr-5 lg:pr-0 lg:col-span-6 lg:pl-[70px] lg:pt-[14px]">
            <div class="px-5 py-4 w-fit section-intro">
              <p class="text-xl font-semibold text-secondary">
                Welcome to Mazingira
              </p>
            </div>
            <div class="slider-wrapper">
              <div class="slick-slider slick-initialized" dir="ltr">
                <div class="slick-list">
                  <div
                    class="slick-track"
                    //         style="
                    //     width: 3990px;
                    //     opacity: 1;
                    //     transform: translate3d(-1710px, 0px, 0px);
                    //   "
                  >
                    <div
                      data-index="-1"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      //   style="width: 570px"
                    >
                      <div>
                        <div
                          class=""
                          tabindex="-1"
                          //   style="width: 100%; display: inline-block"
                        >
                          <div>
                            <h3 class="py-5 text-secondary text-[28px] leading-10 lg:text-subtitle text-#0A033C font-bold">
                              Making a difference that resonates through time
                            </h3>
                          </div>
                          <div>
                            <p class="pb-32 leading-8 text-gray-700 lg:pb-44 font-base">
                              The call of our time echoes louder than ever
                              before <br />
                              <br />
                              The imperative to protect and heal our planet. As
                              stewards of this magnificent Earth, we stand
                              united in our unwavering commitment to
                              environmental conservation The urgency of our
                              action cannot be overstated, for the very future
                              of generations to come hangs in the balance
                              <br />
                              <br /> We believe that our collective efforts
                              serve as a beacon of hope,illuminating a path
                              toward a world with clean air,freshwater, and
                              thriving ecosystems.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute pt-12 mb-24 -mt-28 lg:-mt-40">
                <a
                  target=" "
                  rel="noreferrer"
                  href="/contact"
                  class="px-6 py-5 bg-secondary text-white ml-0.5 text-sm font-semibold rounded"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
          <div class="relative pt-4 lg:col-span-6">
            <div class="absolute z-0 h-24 translate-x-1/2 bg-contain translate-y-1/6 lg:-translate-y-10 lg:h-48 lg:translate-x-36 w-44 lg:block"></div>
            <div class="relative z-10">
              <img
                src="../../../images/welcome.jpg"
                alt="mazingira-smart"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
