// P: Pawn
// N: Knight
// B: Bishop
// R: Rook
// Q: Queen
// K: King - (not implemented)
// G: Goal - Red goal square.
// H: Hero - Piece that needs to reach the goal.
// Always start with Piece abbreviation - PH, RH etc.
const puzzles = [
  {
    title: "Pawn = Queen",
    info: "Use the standard chess movements to move the pawn to the red square.",
    board: [
      ["B", "N", "R", "PH"],
      ["B", "N", "R", null],
      ["B", "N", "R", null],
      ["B", "N", "R", "-G"],
    ],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1718348748/pawn-queen-puzzle-get-the-pawn-to-the?click_key=26a4b01629d1eec34fafadaa6f8b364aa3bd4245%3A1718348748&click_sum=795cbe16&ref=related-3&sts=1",
  },
];

export default puzzles;
