require('dotenv').config();
const {
  RecaptchaEnterpriseServiceClient,
} = require('@google-cloud/recaptcha-enterprise');

exports.recaptchaVerification = async (
  projectID,
  siteKey,
  recaptchaAction,
  token
) => {
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  const request = {
    assessment: {
      event: {
        token,
        siteKey,
      },
    },
    parent: projectPath,
  };

  const [response] = await client.createAssessment(request);

  if (!response.tokenProperties.valid) {
    console.log(
      `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
    );
    return false;
  }

  if (
    response.tokenProperties.action === recaptchaAction &&
    response.riskAnalysis.score >= 0.8
  ) {
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    response.riskAnalysis.reasons.forEach((reason) => {
      console.log(reason);
    });
    client.close();
    return true;
  } else {
    console.log('Wrong action or low score');
    client.close();
    return false;
  }
};
