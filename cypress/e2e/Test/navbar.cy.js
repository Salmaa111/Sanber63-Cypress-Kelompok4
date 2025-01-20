import NavBar from '../Pages/NavBar';

describe('Navigation Bar Test', () => {
    const navBar = new NavBar();

    beforeEach(() => {
        navBar.visit();
    });

    it('should navigate through the Women dropdown menu', () => {
        navBar.hoverWomenMenu();
        navBar.verifyTopsAndBottomsVisible();
        navBar.hoverTops();
        navBar.verifyTopsSubcategoriesVisible();
        navBar.hoverBottoms();
        navBar.verifyBottomsSubcategoriesVisible();
    });
});
