describe('Login API', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return token for valid credentials', async () => {
    const expectedResponse = { token: 'fake-token' };

    global.fetch.mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValue(expectedResponse),
    });

    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }),
    });

    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toHaveProperty('token');
    expect(data.token).toBe('fake-token');
  });

  it('should return error for missing password', async () => {
    const expectedResponse = { error: 'Missing password' };

    global.fetch.mockResolvedValueOnce({
      status: 400,
      json: jest.fn().mockResolvedValue(expectedResponse),
    });

    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in'
      }),
    });

    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Missing password');
  });

});