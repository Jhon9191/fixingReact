import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Button } from ".";

describe('<Button/>', () => {
    it('Should render the button with text "Load more"', () => {
        render(<Button name="Load more" />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('Should call function on button click', () => {
        const fn = jest.fn();
        render(<Button name="Load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1);
    });

});