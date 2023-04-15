// @flow
import { notFound } from 'next/navigation';
import * as React from 'react';
type Props = {
  params: {
    slug: string;
  }
};
export default function Products({params}: Props) {
  if(params.slug === 'nothing') {
    notFound();
  }

  return (
    <div>
        <h1>
        {params.slug} 제품 설명 페이지
      </h1>
    </div>
  );
};

export async function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product,
  }))
}