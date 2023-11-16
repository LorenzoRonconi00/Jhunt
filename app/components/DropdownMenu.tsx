import Image from "next/image";

const items = [
    {
        name: "Account",
        icon: "images/account.svg",
        link: "#",
    },
    {
        name: "Il tuo Curriculum",
        icon: "images/curriculum.svg",
        link: "#",
    },
    {
        name: "Le tue Candidature",
        icon: "images/candidature.svg",
        link: "#",
    },
    {
        name: "Impostazioni",
        icon: "images/impostazioni.svg",
        link: "#",
    },
    {
        name: "Logout",
        icon: "images/logout.svg",
        link: "#",
    },
];

const DropdownMenu = () => {
    return (
        <div className="relative rounded-[30px] border-4 bg-[white] shadow-2xl w-[300px] h-[400px]">
            <div className="flex flex-col">
                {items.map((item, index) => (
                    <div className="flex flex-row gap-x-4 items-center justify-end px-6 py-5" key={index}>
                        <a href={item.link} className="text-[#1F1695] text-[20px] font-bold">{item.name}</a>
                        <Image src={item.icon} alt="" width={30} height={30} className="cursor-pointer"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
