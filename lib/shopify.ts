// 这里是 Shopify Storefront API 接入模板
// 替换你的 endpoint 与 token
const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_API_URL;
const token = process.env.NEXT_PUBLIC_SHOPIFY_API_TOKEN;

export async function fetchFromShopify(query, variables = {}) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
