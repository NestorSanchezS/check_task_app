import React from 'react';
import ContentLoader from 'react-content-loader';

import './TodoLoading.css';

export const TodoLoading = (props) => {
  return (
    <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="50" y="10" rx="4" ry="4" width="343" height="55" />
    <rect x="8" y="10" rx="4" ry="4" width="35" height="55" />
    <rect x="50" y="80" rx="4" ry="4" width="343" height="55" />
    <rect x="8" y="80" rx="4" ry="4" width="35" height="55" />
    <rect x="50" y="155" rx="4" ry="4" width="343" height="55" />
    <rect x="8" y="155" rx="4" ry="4" width="35" height="55" />
    <rect x="50" y="230" rx="4" ry="4" width="343" height="55" />
    <rect x="8" y="230" rx="4" ry="4" width="35" height="55" />
    <rect x="50" y="300" rx="4" ry="4" width="343" height="55" />
    <rect x="8" y="300" rx="4" ry="4" width="35" height="55" />
  </ContentLoader>
  )
}