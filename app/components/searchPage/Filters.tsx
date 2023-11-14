import Image from "next/image";

const Filters = () => {
  return (
    <div className="hidden lg:fixed w-screen z-1 top-0 lg:flex lg:flex-col py-[30px] px-[60px]">
      <div className="flex justify-start items-center gap-20">
        <Image src="images/logo-jhunt-text.svg" alt="logo" width={120} height={120} />
      </div>
      <footer className="fixed bottom-0 left-0">
        <Image src="images/Blobs.svg" alt="Blobs" width={800} height={300} />
      </footer>
    </div>
  );
};

export default Filters;
