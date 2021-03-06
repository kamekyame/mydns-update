import { baFetch, BasicAuthInfo } from "./deps.ts";
import { nonReqEnv } from "./env.ts";

const username = nonReqEnv.MASTER_ID;
const password = nonReqEnv.PASSWORD;

if (!username || !password) {
  console.log("[mydns_update] username or password is not set");
} else {
  const auth: BasicAuthInfo = { username, password };
  ["ipv4", "ipv6"].forEach(async (type) => {
    const res = await baFetch(`https://${type}.mydns.jp/login.html`, auth);
    // console.log(res);
    if (res.status === 200) {
      console.log(`[mydns_update] Updated ${type}`);
    } else {
      console.log(`[mydns_update] Failed update ${type}`);
    }
  });
}
