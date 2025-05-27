import RoomList from "./RoomList";
const getRooms = async () => {
  const res = await fetch(`http://localhost:1337/api/rooms?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const Rooms = async () => {
  const rooms = await getRooms();

  return (
    <section>
      <div className="container mx-auto">
        <RoomList rooms={rooms} />
      </div>
    </section>
  );
};

export default Rooms;
