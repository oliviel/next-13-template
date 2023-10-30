interface Props {
  params: {
    id: number;
    photoid: number;
  };
}

const PhotoDetailPage = ({ params: { photoid, id } }: Props) => {
  return (
    <div>
      <h1>
        Photo Detail Page {id} {photoid}
      </h1>
    </div>
  );
};

export default PhotoDetailPage;
