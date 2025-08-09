import '@testing-library/jest-dom/vitest'; // 👈 auto-extends expect for Vitest

import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Clean up the DOM after each test
afterEach(() => {
    cleanup();
});
