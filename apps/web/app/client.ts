import { createThirdwebClient } from "thirdweb";
import { createAuth } from "thirdweb/auth";
import { privateKeyAccount } from "thirdweb/wallets";
const privateKey = process.env.NEXT_PUBLIC_THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}
// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
export const thirdwebAuth = createAuth({
  domain: String(process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN) || "",
  adminAccount: privateKeyAccount({ client, privateKey }),
});
