import { getUrlWithUserFileLocation, getUserFileLocation } from './image';

describe('image helper', () => {
  beforeEach(async () => {
    jest.resetModules();
    process.env = { KNN_PROXY_URL: 'knn_proxy_url' };
  });

  it('returns the complete url with the proxy location', async () => {
    const url = getUrlWithUserFileLocation('urlhash', 'userID');

    expect(url).toEqual('knn_proxy_url/userID/urlhash');
  });

  it('returns image id location', async () => {
    const url = getUserFileLocation('urlhash', 'userID');

    expect(url).toEqual('userID/urlhash');
  });
});
