import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    'color-contrast': { enabled: false }
  }
});

export async function checkA11y(container: HTMLElement, options?) {
  expect(await axe(container, options)).toHaveNoViolations();
}
