import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const loginPOST = (Constants, { email, password }) =>
  fetch(`https://xjmi-ksfk-kkaf.f2.xano.io/api:Csisrhf5/auth/login`, {
    body: JSON.stringify({ email: email, password: password }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const signupPOST = (Constants, { email, password }) =>
  fetch(`https://xjmi-ksfk-kkaf.f2.xano.io/api:Csisrhf5/auth/signup`, {
    body: JSON.stringify({
      name: 'Hippolyte',
      email: email,
      password: password,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});
