export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "jk-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tf5nxtlhe9.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_uAdcUKD21",
    APP_CLIENT_ID: "35f8tvlkmnnpvc8up6asmo8pci",
    IDENTITY_POOL_ID: "us-east-1:ed636be8-0dc5-405e-8788-a48477c5ea12"
  }
};