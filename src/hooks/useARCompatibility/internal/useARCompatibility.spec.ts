import { renderHook } from '@testing-library/react';
import { useARCompatibility } from './useARCompatibility.hooks';

describe('useARCompatibility', () => {
  beforeEach(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: '',
      writable: true,
    });
  });

  it('should return the correct OS name for iOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.osName).toBe('iOS');
  });

  it('should return true for supported OS versions for iOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(true);
  });

  it('should return false for unsupported OS versions for iOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A345 Safari/602.1',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });

  it('should return the correct OS name for Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android 13; Pixel 6 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.osName).toBe('Android');
  });

  it('should return true for supported OS versions for Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android 13; Pixel 6 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(true);
  });

  it('should return false for unsupported OS versions for Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Mobile Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });

  it('should return the correct OS name for Windows', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.osName).toBe('Windows');
  });

  it('should return true for unsupported OS versions for Windows', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });

  it('should return the correct OS name for Mac', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.osName).toBe('Mac OS');
  });

  it('should return true for unsupported OS versions for Mac', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });

  it('should return false for unsupported OS versions for Mac', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });

  it('EDGE: should return false for unsupported OS versions for Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android; Pixel 6 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });

  it('EDGE: should return false for unsupported OS versions for iOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS like  OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
      writable: true,
    });
    const { result } = renderHook(() => useARCompatibility());
    expect(result.current.isSupported).toBe(false);
  });
});
