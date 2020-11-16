import 'jest-preset-angular';
import './jestGlobalMocks';
import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);