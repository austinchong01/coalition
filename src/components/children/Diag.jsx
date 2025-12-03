const Diag = ({ problem, desc, status }) => {
  return (
    <div className="items-center body-regular-14 grid grid-cols-8 body-emphasized-14pt px-[16px] py-[14px] rounded-3xl">
      <div className="col-span-3">{problem}</div>
      <div className="col-span-4">{desc}</div>
      <div className="col-span-1">{status}</div>
    </div>
  );
};

export default Diag;
