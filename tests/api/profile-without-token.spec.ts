import { test, expect } from '@playwright/test';

test('AUTH-API-01: get profile without an authentication token returns HTTP 401', async ({ request }) => {
  const response = await request.get('https://practice.expandtesting.com/notes/api/users/profile');

  expect(response.status()).toBe(401);
});
