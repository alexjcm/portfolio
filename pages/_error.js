import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';

const CustomErrorComponent = (props) => {
  console.warn('CustomErrorComponent1');
  return <Error statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  console.warn('CustomErrorComponent2');
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return Error.getInitialProps(contextData);
};

export default CustomErrorComponent;
