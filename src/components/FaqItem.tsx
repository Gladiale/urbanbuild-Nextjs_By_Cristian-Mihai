import { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

type FaqItemProps = {
  title: string;
  description: string;
};

const FaqItem = ({ title, description }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          type="button"
          className="w-[44px] h-[44px] bg-accent flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <RiSubtractFill className="text-primary text-2xl animate-opacity" />
          ) : (
            <RiAddFill className="text-primary text-2xl animate-opacity" />
          )}
        </button>
      </div>

      {/* description */}
      <div
        className={`${
          isOpen
            ? "max-h-[200px] opacity-100 duration-500"
            : "max-h-0 opacity-0 duration-300"
        } overflow-hidden transition-all ease-in-out`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;
