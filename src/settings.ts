import {ResultType} from './backend/types';

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

// Задержка бэкенда
export const BACKEND_TIMEOUT = 1500;

// Регулярное выражение для проверки ника
export const NICK_RX = /^[@а-яА-Яa-zA-Z0-9_]+$/;

// Регулярное выражение для проверки имени и фамилии
export const FN_RX = /^[а-яА-Яa-zA-Z]+$/;

// Текст-заполнитель для карточек
export const CARD_PLACEHOLDER = `
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit, sed quia non numquam eius modi tempora 
incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
quo voluptas nulla pariatur?
`;
