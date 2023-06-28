import { request } from './axiosUtils';
import { axios } from './library';

describe('axiosUtils', () => {
  describe('request', () => {
    it('型エラー検知用', async () => {
      const mockResponse = { data: 'mock data' };
      const mockAxios = vi
        .spyOn(axios, 'request')
        .mockResolvedValueOnce(mockResponse);

      const result = await request({
        url: '/arts',
        method: 'get',
      });

      expect(mockAxios).toHaveBeenCalledWith({
        url: '/api/arts',
        method: 'get',
      });
      expect(result).toEqual(mockResponse);

      mockAxios.mockRestore();
    });
  });
});
