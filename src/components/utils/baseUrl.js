// utils/baseUrl.js
export const getBaseUrl = () => {
    const isProduction = process.env.NODE_ENV === 'production';
  
    return isProduction ? '/project-react' : '';
  };
  