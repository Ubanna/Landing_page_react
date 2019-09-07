import React from 'react'

export default function setInStorage(key, obj) {
    if (!key) {
      console.error('Error: Key is missing');
    }  try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
      console.error(err);
    }
  }