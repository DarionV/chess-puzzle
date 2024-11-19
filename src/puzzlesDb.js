// P: Pawn
// N: Knight
// B: Bishop
// R: Rook
// Q: Queen
// K: King
// G: Goal - Red goal square.
// H: Hero - Red piece that needs to reach the goal.
// Always start with Piece abbreviation - PH, RH etc.

// Solution: For tiles that must be checked for winning condition, type in
// the condition to be checked. For all other tiles, type in null. If all tiles
// in a row is null, have the entire row be null.
const puzzles = [
  {
    title: "Pawn = Queen",
    info: "Get the red pawn to the red square",
    board: [
      ["B", "N", "R", "PH"],
      ["B", "N", "R", null],
      ["B", "N", "R", null],
      ["B", "N", "R", "-G"],
    ],
    solution: [[null], [null], [null], [null, null, null, "H"]],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1718348748/pawn-queen-puzzle-get-the-pawn-to-the?click_key=26a4b01629d1eec34fafadaa6f8b364aa3bd4245%3A1718348748&click_sum=795cbe16&ref=related-3&sts=1",
    url: "pawn-queen-puzzle",
    metaDescription:
      "Play the Pawn = Queen chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  {
    title: "The Rook",
    info: "Get the red rook to the red square",
    board: [
      [null, "B", "N", "P", "-G"],
      [null, "B", "N", "P", null],
      [null, "B", "N", "P", null],
      ["RH", "B", "N", "P", null],
    ],
    solution: [[null, null, null, null, "H"], [null], [null], [null]],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1771561993/rook-puzzle-get-the-rook-to-the-black?click_key=95399a6e49a5ec679cee8d83c673a8e126a91f29%3A1771561993&click_sum=280691d9&ref=shop_home_active_1&crt=1&sts=1",
    url: "the-rook-puzzle",
    metaDescription:
      "Play The Rook chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },

  {
    title: "Exchange the Kings",
    info: "Exchange the kings",
    board: [
      ["ND", "RD", null, "R", "N"],
      [null, "KG", "-", "KDG", null],
      ["BD", "ND", null, "N", "B"],
    ],
    solution: [[null], [null, "KD", null, "K", null], [null]],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1771561993/rook-puzzle-get-the-rook-to-the-black?click_key=95399a6e49a5ec679cee8d83c673a8e126a91f29%3A1771561993&click_sum=280691d9&ref=shop_home_active_1&crt=1&sts=1",
    url: "exchange-the-kings-puzzle",
    metaDescription:
      "Play the Exchange The Kings chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  {
    title: "The Knight",
    info: "Get the red knight to the red square",
    board: [
      ["NH", "B", "B", "B", "B", "R"],
      ["N", "N", "N", "N", "R", "R"],
      [null, null, null, null, "R", "-G"],
    ],
    solution: [[null], [null], [null, null, null, null, null, "H"]],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1771561993/rook-puzzle-get-the-rook-to-the-black?click_key=95399a6e49a5ec679cee8d83c673a8e126a91f29%3A1771561993&click_sum=280691d9&ref=shop_home_active_1&crt=1&sts=1",
    url: "the-knight-puzzle",
    metaDescription:
      "Play The Black Knight chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
];

export default puzzles;
