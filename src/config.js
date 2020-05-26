const dev = {
  STRIPE_KEY: "pk_test_G2IkjBEkW6FX5gtgIGUkdWbR00dr9hFbSH",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1c9buupmym44"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kl5l514636.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_5xjK62YiY",
    APP_CLIENT_ID: "4b2or9kgplkkbgbdjjmajkru1n",
    IDENTITY_POOL_ID: "us-east-1:ab6826ae-b9ea-4257-b1f4-b84d0e53b8f2"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_G2IkjBEkW6FX5gtgIGUkdWbR00dr9hFbSH",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1nu5pztof4msk"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6ksrz6rb2l.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ssYbiPBF9",
    APP_CLIENT_ID: "3gv4b43mv1t5kelbgisarpfelh",
    IDENTITY_POOL_ID: "us-east-1:5b885958-b618-4b12-93fd-69c09f5e80e1"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};