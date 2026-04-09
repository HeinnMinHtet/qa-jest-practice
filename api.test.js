describe('Login API', () => {
  it('should return token for valid credentials', async () => {
    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    });

    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toHaveProperty('token');
  });
});