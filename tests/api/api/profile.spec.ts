import { test, expect } from '@playwright/test';

test('AUTH-API-01: get profile without an authentication token returns HTTP 401', async ({ request }) => {
  const response = await request.get('https://practice.expandtesting.com/notes/api/users/profile');

  expect(response.status()).toBe(401);
});

test('AUTH-API-02: get profile with an invalid authentication token returns HTTP 401', async ({ request }) => {
  const response = await request.get('https://practice.expandtesting.com/notes/api/users/profile', {
    headers: {
      'x-auth-token': 'invalid_token'
    }
  });

  expect(response.status()).toBe(401);
});
