import {ResultType} from './utils';

export const ERROR_URL = 'error';
export const POST_URL = 'post';
export const PHONE_URL = 'phone';
export const NICK_URL = 'nick';
export const FAMILY_NAME_URL = 'family_name';
export const IP_ADDRESS_URL = 'ip_address';

export const PATH_SELECTOR: any = {
  [ResultType.Error]: ERROR_URL,
  [ResultType.Post]: POST_URL,
  [ResultType.Phone]: PHONE_URL,
  [ResultType.Nick]: NICK_URL,
  [ResultType.FamilyName]: FAMILY_NAME_URL,
  [ResultType.IPAddress]: IP_ADDRESS_URL,
};
