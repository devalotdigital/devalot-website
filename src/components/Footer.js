import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto bg-blueish space-y-2 py-5">
        <div className=" text-white font-bold lg:w-10/12 mx-auto flex justify-center items-center py-3">
          <div className="flex space-x-3">
            {/* <a
              // data-aos="fade-left"
              // data-aos-duration="1100"
              href="https://www.facebook.com/DevAlotDigital"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 48 48"
                fill="white"
                className="socials"
              >
                <path d="M47 7.18v32.64c0 3.955-3.225 7.18-7.18 7.18h-7.181V28.722h4.726c.666 0 1.227-.496 1.306-1.149l.483-3.916a1.265 1.265 0 0 0-.314-1.019 1.28 1.28 0 0 0-.979-.444H32.64v-4.569a2.619 2.619 0 0 1 2.611-2.611h2.611a1.31 1.31 0 0 0 1.306-1.306V9.296c0-.666-.523-1.228-1.188-1.293-.079-.013-1.92-.17-4.257-.17-5.744 0-8.916 3.42-8.916 9.622v4.74h-5.223a1.31 1.31 0 0 0-1.305 1.305v3.917a1.31 1.31 0 0 0 1.305 1.305h5.223V47H7.18C3.225 47 0 43.775 0 39.82V7.18C0 3.226 3.225 0 7.18 0h32.64C43.774 0 47 3.225 47 7.18z" />
              </svg>
            </a> */}
            <a
              data-aos="fade-left"
              data-aos-duration="1200"
              href="https://www.instagram.com/devalot.digital/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 48 48"
                fill="white"
                className="socials"
              >
                <path d="M23.806 15.871c-4.372 0-7.94 3.569-7.94 7.941s3.568 7.94 7.94 7.94 7.94-3.567 7.94-7.94c0-4.372-3.567-7.94-7.94-7.94zm23.816 7.941c0-3.288.03-6.547-.155-9.83-.184-3.812-1.054-7.195-3.842-9.983C40.831 1.205 37.454.34 33.641.157c-3.288-.185-6.547-.155-9.829-.155-3.288 0-6.547-.03-9.83.155C10.17.34 6.788 1.21 4 3.999 1.205 6.793.34 10.17.157 13.983-.028 17.27.002 20.53.002 23.812c0 3.282-.03 6.547.155 9.83.184 3.812 1.054 7.195 3.842 9.983 2.794 2.794 6.171 3.658 9.984 3.842 3.288.185 6.547.155 9.829.155 3.288 0 6.547.03 9.83-.155 3.812-.184 7.195-1.054 9.983-3.842 2.794-2.794 3.658-6.171 3.842-9.984.191-3.282.155-6.54.155-9.829zM23.806 36.03a12.2 12.2 0 0 1-12.218-12.218 12.2 12.2 0 0 1 12.218-12.218 12.2 12.2 0 0 1 12.218 12.218A12.2 12.2 0 0 1 23.806 36.03zm12.718-22.083a2.85 2.85 0 0 1-2.853-2.853 2.85 2.85 0 0 1 2.853-2.854 2.85 2.85 0 0 1 2.854 2.854 2.852 2.852 0 0 1-2.854 2.853z" />
              </svg>
            </a>
            <a
              data-aos="fade-left"
              data-aos-duration="1300"
              href="https://mobile.twitter.com/devalot.digital"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 48 48"
                fill="white"
                className="socials"
              >
                <path d="M37.333 0H10.667C4.776 0 0 4.776 0 10.667v26.666C0 43.224 4.776 48 10.667 48h26.666C43.224 48 48 43.224 48 37.333V10.667C48 4.776 43.224 0 37.333 0zm.134 17.37v.915c0 8.686-6.63 18.744-18.744 18.744-3.656 0-7.086-1.144-10.056-2.97h1.6c2.97 0 5.944-1.144 8.229-2.744-2.97 0-5.256-2.056-6.17-4.571.455 0 .914.23 1.143.23.686 0 1.144 0 1.83-.23-2.971-.685-5.256-3.2-5.256-6.4.914.456 1.829.685 2.97.915-1.829-1.6-2.97-3.43-2.97-5.715 0-1.144.229-2.285.914-3.2 3.2 3.885 8 6.63 13.486 6.856 0-.456-.23-.915-.23-1.6a6.635 6.635 0 0 1 6.63-6.63c1.829 0 3.656.686 4.8 2.057 1.6-.23 2.97-.915 4.114-1.6-.456 1.6-1.6 2.744-2.97 3.656 1.37-.23 2.514-.456 3.885-1.144-.92 1.376-2.061 2.517-3.205 3.432z" />
              </svg>
            </a>
            <a
              data-aos="fade-left"
              data-aos-duration="1400"
              href="https://www.linkedin.com/company/devalot-digital/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 48 48"
                fill="white"
                className="socials"
              >
                <path d="M42.286 0H5.714A5.716 5.716 0 0 0 0 5.714v36.572A5.716 5.716 0 0 0 5.714 48h36.572A5.716 5.716 0 0 0 48 42.286V5.714A5.716 5.716 0 0 0 42.286 0zM14.857 18.286V40H8V18.286h6.857zM8 11.966c0-1.6 1.371-2.823 3.429-2.823 2.057 0 3.348 1.223 3.428 2.823 0 1.6-1.28 2.891-3.428 2.891C9.37 14.857 8 13.566 8 11.966zM40 40h-6.857V28.571c0-2.285-1.143-4.571-4-4.617h-.092c-2.765 0-3.908 2.355-3.908 4.617V40h-6.857V18.286h6.857v2.925s2.206-2.925 6.64-2.925c4.537 0 8.217 3.12 8.217 9.44V40z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          className="flex flex-col text-white font-bold lg:justify-between text-white lg:w-10/12 mx-auto text-center pb-3 "
        >
          <p className="text-xs md:text-sm pb-2 lg:pb-0 2xl:text-2xl">
            Copyright ?? 2022 DevAlot Digital. Tous droits r??serv??s.
          </p>
          <p className="text-xs md:text-sm 2xl:text-2xl">
            Made with &#10084;&#65039; by DevAlot Digital{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
