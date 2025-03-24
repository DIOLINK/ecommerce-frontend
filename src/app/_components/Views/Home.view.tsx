'use client';
import { useTransition } from 'react';
import Layout from '../Layout';

export default function HomePage() {
  const [pending, startTransition] = useTransition();

  function addComment(comment: string | null = 'hola') {
    if (comment == null) {
      throw new Error(
        'Example Error: An error thrown to trigger error boundary'
      );
    }
  }
  return (
    <Layout>
      Home.view
      <button
        disabled={pending}
        onClick={() => {
          startTransition(() => {
            addComment(null);
          });
        }}
      >
        Add comment
      </button>
    </Layout>
  );
}
