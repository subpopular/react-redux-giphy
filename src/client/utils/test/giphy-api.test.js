import expect from 'expect';
import giphy from '../giphy-api';

global.fetch = expect.createSpy().andReturn(
  Promise.resolve({
    json: async () => ({ foo: 'bar' })
  })
);

describe('giphy api module', () => {

  it('should fetch from giphy api with params', async () => {
    const json = await giphy.get('/foo', { q: 'bar', limit: 10 });
    expect(fetch).toHaveBeenCalledWith(
      'http://api.giphy.com/v1/gifs/foo?q=bar&limit=10&api_key=dc6zaTOxFJmzC'
    );
    expect(json).toEqual({ foo: 'bar' });
  });

  it('should perform search', async () => {
    const json = await giphy.search('kittens');
    expect(fetch).toHaveBeenCalledWith(
      'http://api.giphy.com/v1/gifs/search?q=kittens&api_key=dc6zaTOxFJmzC'
    );
    expect(json).toEqual({ foo: 'bar' });
  });

});
