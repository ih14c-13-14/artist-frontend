import type { SrcOptions } from './GoogleMap.types';

export const buildSrc = ({ q, apiKey, zoom }: SrcOptions) => {
  const encodedQ = encodeURIComponent(q);
  return `https://www.google.com/maps/embed/v1/place?q=${encodedQ}&key=${apiKey}&zoom=${zoom}`;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('build src correctly', () => {
    const builtSrc = buildSrc({
      q: '34.659096,165.622182',
      apiKey: 'key',
      zoom: 1,
    });

    expect(builtSrc).toBe(
      'https://www.google.com/maps/embed/v1/place?q=34.659096%2C165.622182&key=key&zoom=1'
    );
  });
}
