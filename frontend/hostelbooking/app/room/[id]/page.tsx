const getRoomData = async ({ params }: { params: any }) => {
  const res = await fetch(
    `http://localhost:1337/api/rooms/${params.id}?populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return await res.json();
};

const RoomDetails = async ({ params }: { params: any }) => {
  const room = await getRoomData({ params });
  console.log(room);
  const imgURL = `http://localhost:1337${room.data?.image.data.url}`;
  console.log(imgURL);
  return <div>Room Details</div>;
};

export default RoomDetails;
