import { useContext } from "react";
import styles from "./header.module.css";
import BoardContext from "../../context/BoardContext";

export default function Header() {
  const { resetBoard } = useContext(BoardContext);

  return (
    <header className={styles.header}>
      <button>Mute</button>
      <button onClick={resetBoard}>Reset puzzle</button>
      <a
        href="https://www.etsy.com/se-en/listing/1718348748/pawn-queen-puzzle-get-the-pawn-to-the?click_key=ae933615e6048cb3c2e870882acbd05a13ca25ef%3A1718348748&click_sum=7a8479e2&external=1&rec_type=ss&ref=landingpage_similar_listing_top-7&sts=1"
        target="blank"
      >
        BUY THIS PUZZLE
      </a>
    </header>
  );
}
