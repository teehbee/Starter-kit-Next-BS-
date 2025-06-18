import Link from "next/link";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../assets/icon";

function Footer() {
  return (
    <footer className="alt-bg-color py-45">
      <div className="container text-center">
        <div className="row align-items-end border-bottom pb-15">
          <div className="d-none d-lg-flex col-lg-4 justify-content-end">
            <Link className="pr-50" href="/underside-1">
              Underside 1
            </Link>
            <Link className="pr-50" href="/underside-2">
              Underside 2
            </Link>
          </div>
          <div className="col-12 col-lg-4">
            <Link href="/">Logo</Link>
          </div>
          <div className="d-none d-lg-flex col-lg-4 justify-content-start">
            <Link className="pl-50" href="underside-3">
              Underside 3
            </Link>
            <Link className="pl-50" href="personvern">
              Personvern
            </Link>
          </div>
          <div className="d-flex flex-wrap d-lg-none col-12 justify-content-center pt-15">
            <Link className="px-15 pb-5" href="underside-1">
              Underside 1
            </Link>
            <Link className="px-15 pb-5" href="underside-2">
              Underside 2
            </Link>
            <Link className="px-15 pb-5" href="underside-3">
              Underside 3
            </Link>
            <Link className="px-15 pb-5" href="personvern">
              Personvern
            </Link>
          </div>
        </div>
        <div className="row align-items-center border-bottom py-15">
          <div className="col-12 footer-socials-row d-flex justify-content-center fs-0-75-rem-lg-0-875rem ">
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" aria-label="Facebook lenke">
                <FacebookIcon />
                Facebook
              </a>
            </div>
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" aria-label="Instagram lenke">
                <InstagramIcon />
                Instagram
              </a>
            </div>
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/" aria-label="Linkedin lenke">
                <LinkedinIcon />
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 fs-0-75-rem-lg-0-875rem d-flex justify-content-between py-15">
            <div>Alle rettigheter reservert.</div>
            <div>
              Nettside og design levert av{" "}
              <a target="_blank" href="https://thbergseng-portfolio-2.netlify.app/">
                THbergseng Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
