import { test, expect, request } from '@playwright/test';

test.describe('Login API tests - reqres.in', () => {
  let context;

  test.beforeAll(async () => {
    context = await request.newContext();
  });

  test('✅ Successful login returns token', async () => {
    const response = await context.post('https://reqres.in/api/login', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeTruthy();
    console.log('Token:', body.token);
  });

  test('❌ Unsuccessful login returns error message', async () => {
    const response = await context.post('https://reqres.in/api/login', {
      data: {
        email: 'eve.holt@reqres.in',
        // password missing
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toContain('Missing password');
    console.log('Error:', body.error);
  });
});
