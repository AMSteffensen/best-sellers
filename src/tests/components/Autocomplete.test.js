//import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Autocomplete from "../components/Autocomplete";

describe("Autocomplete component", () => {
  const books = [
    {
      label: "C. J. Box",
      author: "C. J. Box",
      title: "Storm Watch",
      img: "img1",
      id: 1,
    },
    {
      label: "Lessons in Chemistry: A Novel",
      author: "Bonnie Garmus",
      title: "Lessons in Chemistry: A Novel",
      img: "img2",
      id: 2,
    },
    {
      label: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      img: "img3",
      id: 3,
    },
  ];

  test("renders input field and autocomplete list", () => {
    const { getByTestId, getByRole } = render(<Autocomplete items={books} />);

    const inputField = getByTestId("autocomplete-input");
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: "Lessons" } });
    const autocompleteList = getByRole("listbox");
    expect(autocompleteList).toBeInTheDocument();
  });

  test("selects item from autocomplete list and displays label", () => {
    const { getByTestId, getByRole } = render(<Autocomplete items={books} />);

    const inputField = getByTestId("autocomplete-input");
    fireEvent.change(inputField, { target: { value: "Lessons" } });

    const autocompleteList = getByRole("listbox");
    fireEvent.click(autocompleteList.firstChild);

    const selectedLabel = getByTestId("selected-label");
    expect(selectedLabel).toHaveTextContent("Lessons in Chemistry: A Novel");
  });

  test("does not display autocomplete list when input field is empty", () => {
    const { getByTestId, queryByRole } = render(<Autocomplete items={books} />);

    const inputField = getByTestId("autocomplete-input");
    fireEvent.change(inputField, { target: { value: "" } });

    const autocompleteList = queryByRole("listbox");
    expect(autocompleteList).toBeNull();
  });
});
