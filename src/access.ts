/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { user?: API.User }) {
  const { user } = initialState ?? {};
  return {
    canUser: user,
    canAdmin: user && user.role === 'admin',
  };
}
