import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from '../src/components/utils/ScrollToTop';

describe('ScrollToTop', () => {
    test('scrolls to the top of the page on route change', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <ScrollToTop />
            </MemoryRouter>
        );
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
});