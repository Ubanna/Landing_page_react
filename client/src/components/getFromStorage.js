import React from 'react'


export default function getFromStorage(key) {
    if (!key) {
      return null;
    }  try {
      const valueStr = localStorage.getItem(key);
      if (valueStr) {
        return JSON.parse(valueStr);
      }
      return null;
    } catch (err) {
      return null;
    }
  }