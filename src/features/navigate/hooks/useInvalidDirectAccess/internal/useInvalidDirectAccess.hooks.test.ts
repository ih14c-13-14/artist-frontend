import { renderHook } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mock } from 'vitest';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';

import { useInvalidDirectAccess } from './useInvalidDirectAccess.hooks';

// モック化する
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(),
}));

vi.mock('@/routes/getRoutes');

const navigateMock = vi.fn();
const locationMock = {
  state: null as DirectAccessState | null,
};

beforeEach(() => {
  navigateMock.mockReset();
  (getRoutes as Mock).mockReset();

  (useNavigate as Mock).mockImplementation(() => navigateMock);
  (useLocation as Mock).mockImplementation(() => locationMock);
  (getRoutes as Mock).mockImplementation(() => ({
    mapShow: {
      path: '/show',
    },
  }));
});

test('useInvalidDirectAccess navigates to /show when location state is null', () => {
  renderHook(() => useInvalidDirectAccess());
  expect(navigateMock).toHaveBeenCalledWith('/show');
});

test('useInvalidDirectAccess navigates to /show when isDirectAccess is false', () => {
  locationMock.state = {
    isDirectAccess: false,
  };
  renderHook(() => useInvalidDirectAccess());
  expect(navigateMock).toHaveBeenCalledWith('/show');
});

test('useInvalidDirectAccess does not navigate when isDirectAccess is true', () => {
  locationMock.state = {
    isDirectAccess: true,
  };
  renderHook(() => useInvalidDirectAccess());
  expect(navigateMock).not.toHaveBeenCalled();
});
