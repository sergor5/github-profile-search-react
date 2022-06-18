function Avatar({ imageURL }) {
  return (
    <div className="w-20 h-20 rounded-full ring-4 ring-green-500 ">
      <img src={imageURL} alt="Github profile avatar" />
    </div>
  );
}

export default Avatar;
