import { screen } from "@testing-library/react";
import { Card } from "@/components";
import { heroFixture } from "@/tests/fixtures";
import render from "@/tests/_utils/render";

describe("Card Component", () => {
  const hero = heroFixture();

  beforeEach(() => {
    render(<Card hero={hero} />);
  });

  it("renders the hero card with correct name and image", () => {
    const heroName = screen.getByText(hero.name);
    expect(heroName).toBeInTheDocument();

    const heroImage = screen.getByAltText(hero.name);
    expect(heroImage).toHaveAttribute(
      "src",
      `https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`
    );
  });
});
