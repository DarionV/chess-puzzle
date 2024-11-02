import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isOnTutorialPage = location.pathname === "/how-to-play";

  return (
    <header>
      <div className="theme-switcher"></div>
      <nav>
        <a
          href="https://www.etsy.com/se-en/listing/1718348748/pawn-queen-puzzle-get-the-pawn-to-the?click_key=ae933615e6048cb3c2e870882acbd05a13ca25ef%3A1718348748&click_sum=7a8479e2&external=1&rec_type=ss&ref=landingpage_similar_listing_top-7&sts=1"
          target="blank"
        >
          GET THE GAME
        </a>
        <Link to={isOnTutorialPage ? "/" : "/how-to-play"}>
          {isOnTutorialPage ? "BACK TO GAME" : "HOW TO PLAY"}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
