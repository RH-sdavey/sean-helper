import system from "system-components/emotion";

const Heading = system(
  {
    is: "h1",
    fontSize: 6,
    fontWeight: "600",
    lineHeight: 1.5,
    mt: 4,
    mb: 3
  },
  "fontFamily",
  "color",
  "textAlign"
);
Heading.displayName = "Heading";

export default Heading;
