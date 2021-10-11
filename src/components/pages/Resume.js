import React from 'react';
import { Icon } from '@fortawesome/react-fontawesome';
import { FaGithub } from 'react-icons/fa';

export default function Resume() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="
        d-flex
        flex-row
        justify-content-center
        align-items-center
        pt-2
        mt-4
        pb-2
        mb-5
        mt-5
        linksContainer
        extraFadeLight
        row
        curvedCorners
        customSizing2
        "
        id="links"
      >
        <div className="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center ms-5 me-5 mt-2 resumeIcons">
          <a
            href="./assets/ACastelowResume.docx.pdf"
            className="btn btn-success active btn-lg mt-4 resumeBtn"
            role="button"
            aria-pressed="true"
            target="no_blank"
            download
          >
            {'\n'} Download {'\n'} Resume {'\n'}
          </a>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center ms-5 me-5 mt-2 resumeIcons">
          <h2>
            <a href="https://github.com/Bodheim" target="no_blank">
              <Icon icon={FaGithub}></Icon>
            </a>
          </h2>
        </div>

        <div className=" d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center text-light ms-5 me-5 mt-2 resumeIcons">
          <a
            href="https://www.linkedin.com/in/abby-castelow/"
            target="no_blank"
          >
            <img alt="LinkedIn" src="./assets/LI-In-Bug.pgn"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
