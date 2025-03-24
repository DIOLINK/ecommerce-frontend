import { Layout, LayoutTemplate } from '@/app/_components';
import { ROUTES } from '@/app/_config';
import { fetchStrapiQuery } from '@/app/_lib/strapi';
import Image from 'next/image';

export default async function NotFound() {
  const { data: notFound } = await fetchStrapiQuery(ROUTES.STRAPRI.NOT_FOUND());
  const { title, description } = notFound;
  const [image] = notFound.image;
  return (
    <LayoutTemplate className="p-0">
      <Layout>
        <div className="card card-border bg-base-100 ">
          <h2>{title}</h2>
          <div className="card-body">
            <Image
              src={ROUTES.STRAPRI.IMAGE_URL(image.url)}
              alt={image.name}
              width={image.width}
              height={image.height}
              priority
            />
          </div>
          <p className="text-base-content">{description}</p>
        </div>
      </Layout>
    </LayoutTemplate>
  );
}
