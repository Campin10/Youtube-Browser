const config = {
  get API_URL(): string {
    return process.env.REACT_APP_API_URL || 'localhost:3001';
  },
};
export default config;
