import useSWR from 'swr';

const useSignUp = () => {
  const { data, mutate } = useSWR('signUp', () => window.signUp);

  return {
    data: data,
    mutate: (userList) => {
      window.signUp = userList;
      mutate();
    },
  };
};

export default useSignUp;
