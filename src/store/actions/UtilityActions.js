import { server } from '../../config';
import { endUrls } from '../../config/EndUrls';
import { errorHandler } from '../../Utils';

export const demoPost = async (body) => {
  try {
    const res = await server.post(endUrls.generalEnquiry, body);
    if (res.status) {
      return res.data;
    }
  } catch (err) {
    errorHandler(err);
    return false;
  }
};
