interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1>User Detail Page {id} </h1>
    </div>
  );
};

export default UserDetailPage;
