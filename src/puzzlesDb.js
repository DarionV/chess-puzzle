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
    info: "Use the standard chess moves to get the pawn to the red square.",
    board: [
      ["B", "N", "R", "P"],
      ["B", "N", "R", null],
      ["B", "N", "R", null],
      ["B", "N", "RH", "-G"],
    ],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1718348748/pawn-queen-puzzle-get-the-pawn-to-the?click_key=26a4b01629d1eec34fafadaa6f8b364aa3bd4245%3A1718348748&click_sum=795cbe16&ref=related-3&sts=1",
    url: "pawn-queen",
  },
  {
    title: "Rook Puzzle",
    info: "Use the standard chess moves to get the rook to the red square.",
    board: [
      [null, "B", "N", "P", "-G"],
      [null, "B", "N", "P", null],
      [null, "B", "N", "P", null],
      ["RH", "B", "N", "P", null],
    ],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1771561993/rook-puzzle-get-the-rook-to-the-black?click_key=95399a6e49a5ec679cee8d83c673a8e126a91f29%3A1771561993&click_sum=280691d9&ref=shop_home_active_1&crt=1&sts=1",
    url: "rook-puzzle",
  },
];

export default puzzles;
