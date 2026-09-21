import type {
  ActionFunctionArgs,
  HeadersFunction,
  LoaderFunctionArgs,
} from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  return (
    <s-page heading="👋 Welcome to Order Limits">
      <s-stack gap="small">
        <s-stack
          direction="inline"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2>Hello Saim Tahir</h2>

          <div style={{ display: "flex", gap: "4px" }}>
            <s-button commandFor="language-menu">
              English
            </s-button>

            <s-menu id="language-menu" accessibilityLabel="Language actions">
              <s-button icon="language">English</s-button>
              <s-button icon="language">Spanish</s-button>
              <s-button icon="language">Germany</s-button>
              <s-button icon="language">Urdu</s-button>
              <s-button icon="language">Hindi</s-button>
              <s-button icon="language">Japanese</s-button>
            </s-menu>

            <s-button icon="notification" />
          </div>
        </s-stack>

        <s-section heading="Setup order limit rules for your store">
          <s-grid
            gridTemplateColumns="repeat(2, 1fr)"
            gap="small"
            justifyContent="center"
          >
            <s-grid-item gridColumn="auto" border="base" borderRadius="small" padding="small">
              <s-stack gap="small">
                <s-image
                  src="https://order.samita.io/src/assets/images/order-limit.png"
                  alt="Indoor plant"
                  borderRadius="small"
                  border="base"
                />
                <s-stack direction="inline" justifyContent="space-between">
                  <s-heading>Create your first rule?</s-heading>
                  <s-button variant="primary">Create</s-button>
                </s-stack>

                <s-paragraph>
                  With simple rule, the app controls the number of orders, helping you manage your store's traffic and sales. Learn more
                </s-paragraph>
              </s-stack>
            </s-grid-item>
            <s-grid-item gridColumn="auto" border="base" borderRadius="small" padding="small">
              <s-stack gap="small">
                <s-image
                  src="https://order.samita.io/src/assets/images/integrate-theme.png"
                  alt="Indoor plant"
                  borderRadius="small"
                  border="base"
                />
                <s-stack direction="inline" justifyContent="space-between">
                  <s-heading>App status</s-heading>
                  <s-button variant="primary" inlineSize="auto">Enabled</s-button>
                </s-stack>

                <s-paragraph>
                  Enable the app to ensure proper functionality of order limit.
                </s-paragraph>
              </s-stack>
            </s-grid-item>
          </s-grid>
        </s-section>
      </s-stack>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
