import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const Header: FC = () => {
  return (
    <header className="flex justify-between items-center py-6 max-[1494px]:px-2">
      <div className="">
        <Link to={"/"}>
          <img src="logo.svg" alt="Aspirity логотип" />
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Button className="font-semibold text-sm leading-5 max-[555px]:hidden">
          Создать счет
        </Button>
        <Button className="font-semibold text-sm leading-5 max-[555px]:hidden">
          Корзина
        </Button>
        <button className="py-[6px] px-4 rounded-[18px] border border-border-primary flex items-center hover:cursor-pointer">
          <div className="">
            <img src="avatar_small.png" alt="Аватар" />
          </div>
          <div className="p-1">
            <IoIosArrowDown color="white" />
          </div>
        </button>
        <button className="">
          <RxHamburgerMenu color="white" size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
