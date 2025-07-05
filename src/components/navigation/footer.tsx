"use client";

import Link from "next/link";

// import { useSanityData } from "@/utils";
// import { globalSettingsQuery } from "@/lib/queries";
// import { SiteSettingsInterface } from "@/data/interface/siteSettingsInterface";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../assets/icon";

function Footer() {
  // CMS data

  // const settings = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  // if (!settings) {
  //   return null;
  // }

  return (
    <footer className="alt-bg-color py-45">
      <div className="container text-center">
        <div className="row align-items-end border-bottom pb-15">
          <div className="d-none d-lg-flex col-lg-4 justify-content-end">
            <Link className="pr-50" href="/side1">
              Side 1
            </Link>
            <Link className="pr-50" href="/side2">
              Side 2
            </Link>
          </div>
          <div className="col-12 col-lg-4">
            <Link href="/">Logo</Link>
          </div>
          <div className="d-none d-lg-flex col-lg-4 justify-content-start">
            <Link className="pl-50" href="/kontakt">
              Kontakt
            </Link>
            <Link className="pl-50" href="personvern">
              Personvern
            </Link>
          </div>
          <div className="d-flex flex-wrap d-lg-none col-12 justify-content-center pt-15">
            <Link className="px-15 pb-5" href="side1">
              Side 1
            </Link>
            <Link className="px-15 pb-5" href="side2">
              Side 2
            </Link>
            <Link className="px-15 pb-5" href="side3">
              Side 3
            </Link>
            <Link className="px-15 pb-5" href="personvern">
              Personvern
            </Link>
          </div>
        </div>
        <div className="row align-items-center border-bottom py-15">
          <div className="col-12 footer-socials-row d-flex justify-content-center fs-0-75-rem-lg-0-875rem ">
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href="" aria-label="Facebook lenke">
                <FacebookIcon />
                Facebook
              </a>
            </div>
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href="" aria-label="Instagram lenke">
                <InstagramIcon />
                Instagram
              </a>
            </div>
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href="" aria-label="Linkedin lenke">
                <LinkedinIcon />
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 fs-0-75-rem-lg-0-875rem d-flex justify-content-between py-15">
            <div>© 2025 Firmanavn. Alle rettigheter reservert.</div>
            <div>
              Nettside og design levert av{" "}
              <a target="_blank" href="">
                Firmanavn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
