import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock Next.js server-only headers() API to avoid "outside request scope" errors
vi.mock('next/headers', () => ({
    headers: () => new Headers(), // Stubbed headers object
}));
