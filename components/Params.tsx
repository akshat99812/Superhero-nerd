import { useRouter } from 'next/router';

export const Params = () => {
  const router = useRouter();
  const { supeID } = router.query;

  return typeof supeID === 'string' ? supeID : '';
};