import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Input from "../../components/Input/Input";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Input type="text" value="input" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      background-color: #F9F0EB;
      border: 0;
      border-radius: 16px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      color: #8B4727;
      display: block;
      font-size: 16px;
      height: 40px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
    }

    .c0::-webkit-input-placeholder {
      color: #D89374;
    }

    .c0::-moz-placeholder {
      color: #D89374;
    }

    .c0:-ms-input-placeholder {
      color: #D89374;
    }

    .c0::placeholder {
      color: #D89374;
    }

    .c0:disabled {
      background-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c0:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #CD754C,0px 0px 0px 4px rgba(205,117,76,0.6);
    }

    <input
        class="c0"
        scale="md"
        type="text"
        value="input"
      />
    </DocumentFragment>
  `);
});