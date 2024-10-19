// Icons.js
import React from 'react';

// Example icons as React components
const icons = {

  info: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,

  people: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  
  arrowDown: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 8L9.37531 11.5002C9.74052 11.7924 10.2595 11.7924 10.6247 11.5002L15 8" stroke="#2E2C2A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  cross: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.61872 5.38128C6.27701 5.03957 5.72299 5.03957 5.38128 5.38128C5.03957 5.72299 5.03957 6.27701 5.38128 6.61872L8.67761 9.91505C8.70603 9.94346 8.73513 9.97078 8.76487 9.99699C8.73501 10.0231 8.70577 10.0502 8.67721 10.0785L5.3843 13.3395C5.04093 13.6796 5.03824 14.2336 5.37828 14.5769C5.71832 14.9203 6.27233 14.923 6.6157 14.583L9.90861 11.322C9.95749 11.2736 10.0363 11.2737 10.085 11.3224L13.3813 14.6187C13.723 14.9604 14.277 14.9604 14.6187 14.6187C14.9604 14.277 14.9604 13.723 14.6187 13.3813L11.3224 10.085C11.294 10.0565 11.2649 10.0292 11.2351 10.003C11.265 9.97694 11.2942 9.94976 11.3228 9.92148L14.6157 6.66048C14.9591 6.32043 14.9618 5.76642 14.6217 5.42305C14.2817 5.07968 13.7277 5.07699 13.3843 5.41703L10.0914 8.67804C10.0425 8.72645 9.96369 8.72626 9.91505 8.67761L6.61872 5.38128Z" fill="#2E2C2A" fill-opacity="0.6"/>
  </svg>

  ,
};

const Icon = ({ name }) => {
  return icons[name] || null; // Return the icon or null if not found
};

export default Icon;