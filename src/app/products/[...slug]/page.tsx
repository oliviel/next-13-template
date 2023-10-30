interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      <h1>
        Product Page {slug} {sortOrder}
      </h1>
    </div>
  );
};

export default ProductPage;
