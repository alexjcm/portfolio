import * as Sentry from '@sentry/nextjs';

export default function Page() {
  return (
    <div>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>SENTRY </h1>

        <p>Get started by sending us a sample error:</p>
        <button
          type="button"
          style={{
            cursor: 'pointer',
            backgroundColor: '#AD6CAA',
            borderRadius: '4px',
            color: 'white',
          }}
          onClick={async () => {
            await Sentry.startSpan(
              {
                name: 'Example Frontend Span',
                op: 'test',
              },
              async () => {
                const res = await fetch('/api/sentry-example-api');
                if (!res.ok) {
                  throw new Error('Sentry Example Frontend Error');
                }
              }
            );
          }}
        >
          Throw error!
        </button>

        <p>
          Next, look for the error on the{' '}
          <a href="https://ajcm.sentry.io/issues/?project=4508592522395648">Issues Page</a>.
        </p>
      </main>
    </div>
  );
}
