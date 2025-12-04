import 'dotenv/config';
const ADconfig = {
    url: process.env.AD_URL || '',
    baseDn: process.env.AD_BASE_DN || '',
    domain: 'brd.rw',
    readonlyUser: process.env.AD_READONLY_USER || '',
    readonlyPassword: process.env.AD_READONLY_PASSWORD || '',
};
export default ADconfig;