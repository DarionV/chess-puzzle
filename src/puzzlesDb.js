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
      ["N", "B", "R", "PH"],
      ["N", "B", "R", null],
      ["N", "B", "R", null],
      ["N", "B", "R", "-G"],
    ],
    solution: [[null], [null], [null], [null, null, null, "H"]],
    puzzleLink:
      "https://www.etsy.com/se-en/listing/1718348748/pawn-queen-puzzle-get-the-pawn-to-the?click_key=26a4b01629d1eec34fafadaa6f8b364aa3bd4245%3A1718348748&click_sum=795cbe16&ref=related-3&sts=1",
    url: "pawn-queen-puzzle",
    metaDescription:
      "Play the Pawn = Queen chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  // {
  //   title: "The Rook",
  //   info: "Get the red rook to the red square",
  //   board: [
  //     [null, "B", "N", "P", "-G"],
  //     [null, "B", "N", "P", null],
  //     [null, "B", "N", "P", null],
  //     ["RH", "B", "N", "P", null],
  //   ],
  //   solution: [[null, null, null, null, "H"], [null], [null], [null]],
  //   puzzleLink:
  //     "https://www.etsy.com/se-en/listing/1771561993/rook-puzzle-get-the-rook-to-the-black?click_key=95399a6e49a5ec679cee8d83c673a8e126a91f29%3A1771561993&click_sum=280691d9&ref=shop_home_active_1&crt=1&sts=1",
  //   url: "the-rook-puzzle",
  //   metaDescription:
  //     "Play The Rook chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  // },

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
      "https://www.etsy.com/se-en/listing/1742748085/exchange-the-kings-3rd-puzzle-in-the?click_key=913514fb65155ac31caa7ce804e62cb56a0ea4f8%3A1742748085&click_sum=c72c6abd&ref=shop_home_active_13&pro=1&sts=1",
    url: "exchange-the-kings-puzzle",
    metaDescription:
      "Play the Exchange The Kings chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  {
    title: "The Bishop",
    info: "Exchange the kings",
    board: [
      [null, null, null, null, "GB"],
      [null, "R", "N", "R", null],
      [null, "N", "Q", "N", null],
      [null, "-", "N", "R", null],
      ["BH", null, null, null, null],
    ],
    solution: [[null, null, null, null, "H"], [null], [null], [null]],
    puzzleLink: null,
    url: "the-bishop",
    metaDescription:
      "Play the The Bishop chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  {
    title: "Back and forth",
    info: "-",
    board: [
      [null, "B", null, "N", null, null],
      ["R", "N", "B", "N", "PH", "-G"],
      [null, "B", null, "N", null, null],
    ],
    solution: [[null], [null, null, null, null, null, "H"], [null]],
    puzzleLink: null,
    url: "back-and-forth",
    metaDescription:
      "Play the The Back and Forth chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  {
    title: "The Four Horsemen",
    info: "-",
    board: [
      ["NH", null, "R", null, "NH"],
      [null, "N", "GR", "B", null],
      [null, "GR", null, "GR", null],
      [null, "B", "GR", "N", null],
      ["NH", null, "-", null, "NH"],
    ],
    solution: [
      [null],
      [null, null, "H", null, null],
      [null, "H", null, "H", null],
      [null, null, "H", null, null],
      [null],
    ],
    puzzleLink: null,
    url: "the-four-horsemen",
    metaDescription:
      "Play the The Four Horses chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  {
    title: "Jumping Horses",
    info: "-",
    board: [
      ["N", "PH", null, null, "B"],
      ["B", null, null, "N", "R"],
      ["R", "N", null, null, "B"],
      ["R", null, null, "-G", "R"],
    ],
    solution: [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, "H", null],
      ,
    ],
    puzzleLink: null,
    url: "jumping-horses",
    metaDescription:
      "Play the The Jumping Horses chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  },
  // {
  //   title: "The Knight",
  //   info: "Get the red knight to the red square",
  //   board: [
  //     ["NH", "B", "B", "B", "B", "R"],
  //     ["N", "N", "N", "N", "R", "R"],
  //     [null, null, null, null, "R", "-G"],
  //   ],
  //   solution: [[null], [null], [null, null, null, null, null, "H"]],
  //   puzzleLink:
  //     "https://www.etsy.com/se-en/listing/1717635447/black-knight-puzzle-a-fun-mix-of-chess?click_key=22a031becf478b4d38b252f6b7d865758820b092%3A1717635447&click_sum=0bc9fc9e&ref=shop_home_active_4&pro=1&sts=1",
  //   url: "the-knight-puzzle",
  //   metaDescription:
  //     "Play The Black Knight chess puzzle online or on mobile. Challenge your logic with this interactive puzzle by Sherzod Khaydarbekov and DarionV.",
  // },
];

export default puzzles;
