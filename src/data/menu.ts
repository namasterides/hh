/**
 * Heritage Honey — menu data
 * Single source of truth for the Menu Showcase section.
 * Sections -> groups -> items. Items can carry a `premium` flag (gold tag)
 * and/or a `note` (special charge / availability text shown verbatim).
 */

export type MenuItem = {
  name: string;
  /** Renders the small gold "premium" script tag. */
  premium?: boolean;
  /** Special note kept exactly as provided (e.g. charges, availability). */
  note?: string;
};

export type MenuGroup = {
  /** Sub-heading within a section, e.g. "Caribbean + Afro Soul". */
  title: string;
  items: MenuItem[];
};

export type MenuSection = {
  /** Tab label + big display heading, e.g. "PROTEINS". */
  id: string;
  title: string;
  /** Short editorial blurb shown under the section heading. */
  blurb: string;
  groups: MenuGroup[];
};

export const menu: MenuSection[] = [
  {
    id: "proteins",
    title: "Proteins",
    blurb:
      "Marinated low and slow, finished with fire and honey. Our proteins carry the soul of the islands and the warmth of the South.",
    groups: [
      {
        title: "Caribbean + Afro Soul",
        items: [
          { name: "Honey Jerk Salmon" },
          { name: "Honey Jerk Chicken Breast" },
          { name: "Brown Stew Beef" },
          { name: "Slow-Braised Oxtails", premium: true },
          { name: "Crucian Glazed Wings" },
          { name: "Jerk Pineapple Chicken" },
          { name: "Cajun Honey Garlic Salmon" },
          { name: "Smothered Turkey Wings" },
          { name: "Garlic Herb Lamb Chops", premium: true },
        ],
      },
      {
        title: "Southern Luxe",
        items: [
          { name: "Stuffed Chicken Breast" },
          { name: "Marry Me Chicken" },
          { name: "Blackened Chicken" },
          { name: "Herb Roasted Chicken" },
          { name: "Pot Roast" },
          { name: "Fried Catfish" },
          { name: "Blackened Catfish" },
          { name: "Honey Fried Chicken" },
        ],
      },
      {
        title: "Modern Luxury Proteins",
        items: [
          { name: "Crab Stuffed Salmon", premium: true },
          { name: "Steak Kabobs" },
          { name: "Garlic Butter Shrimp" },
          { name: "Teriyaki Glazed Salmon" },
          { name: "Short Ribs", premium: true },
          { name: "Beef Tips in Gravy" },
          { name: "Lemon Herb Salmon" },
          { name: "Garlic Parmesan Chicken" },
        ],
      },
    ],
  },
  {
    id: "sides",
    title: "Classic Sides",
    blurb:
      "Comfort with finesse. From smoked gouda mac to truffle mash, every side is made to stand beside — and steal — the plate.",
    groups: [
      {
        title: "Starches",
        items: [
          { name: "Smoked Gouda Mac & Cheese" },
          { name: "Garlic Mash Potatoes" },
          { name: "Rice & Peas" },
          { name: "Butter Herb Rice" },
          { name: "Vegetable Fried Rice" },
          { name: "Garlic Parmesan Potatoes" },
          { name: "Candied Yams" },
          { name: "Roasted Rosemary Potatoes" },
        ],
      },
      {
        title: "Vegetables",
        items: [
          { name: "Lemon Butter Broccolini" },
          { name: "Garlic Green Beans" },
          { name: "Fried Cabbage" },
          { name: "Steamed Cabbage" },
          { name: "Honey Chili Brussel Sprouts" },
          { name: "Brown Sugar Glazed Carrots" },
          { name: "Garlic Butter Asparagus" },
        ],
      },
      {
        title: "Southern + Soul Sides",
        items: [
          { name: "Collard Greens" },
          { name: "Baked Beans", note: "No Pork Available" },
          { name: "Dirty Rice", note: "No Pork Option" },
          { name: "Southern Potato Salad" },
          { name: "Baked Spaghetti" },
          { name: "Honey Butter Cornbread" },
          {
            name: "Cruzan Rum Cornbread",
            note: "signature upgrade + additional charge",
          },
        ],
      },
      {
        title: "Caribbean-Inspired Sides",
        items: [
          { name: "Sweet Plantains" },
          { name: "Coconut Rice" },
          { name: "Johnny Cake" },
          { name: "Steamed Cabbage" },
          { name: "Fried Cabbage" },
          { name: "Mango Cucumber Salad" },
        ],
      },
      {
        title: "Luxury Upgrade Sides",
        items: [
          { name: "Truffle Mash Potatoes", premium: true },
          { name: "Lobster Mac & Cheese", premium: true },
          { name: "Seafood Cream Pasta", premium: true },
          { name: "Crab Fried Rice", premium: true },
          { name: "Parmesan Truffle Broccolini", premium: true },
          { name: "Garlic Butter Mushrooms" },
          { name: "Truffle Cream Corn", premium: true },
        ],
      },
    ],
  },
];
